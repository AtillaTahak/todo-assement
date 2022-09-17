import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton, BsSearchStyled, BsMoonStyled, BsHouseStyled, BsPlusStyled,
  FooterButton, FooterButtonSave,
} from './Button.styled';
import { DataContext, useContext } from '../../context/DataContext';
import useLocalStorage from '../../hooks/use-localstorage';

function Button({
  type, todoTitle, userName,
}) {
  const { openForm, setOpenForm } = useContext(DataContext);
  const { colorMode, setColorMode } = useContext(DataContext);
  const { getFetchData, setGetFetchData } = useContext(DataContext);
  const url = 'https://63122757f5cba498da8daf58.mockapi.io/todos/';
  const [userNameLocal, setUserNameLocal] = useLocalStorage('name', []);
  const [todoValidation, setTodoValidation] = React.useState(false);
  const insertApi = async (url) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoTitle,
        isCompleted: false,
      }),
    });
    const data = await response.json();
    return data;
  };
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };
  const handleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
    } else {
      setColorMode('light');
    }
  };
  const handleSaveButton = () => {
    if (openForm === true) {
      if (todoTitle !== '' && todoTitle.length > 3) {
        insertApi(url).then((data) => {
          setUserNameLocal([
            ...userNameLocal,
            {
              id: data.id,
              name: userName,
            },
          ]);
          setGetFetchData([
            ...getFetchData,
            {
              id: data.id,
              content: todoTitle,
              isCompleted: false,
            },
          ]);
          setOpenForm(false);
        });
      }else{
        setTodoValidation(true);
      }
    }
  };

  switch (type) {
    case 'search':
      return (
        <SearchButton>
          Search
          <BsSearchStyled />
        </SearchButton>
      );
    case 'Home':
      return (
        <FooterButton>
          <BsHouseStyled />
          <span>Home</span>
        </FooterButton>
      );
    case 'Add':
      return (
        <FooterButton className="addButton" onClick={handleOpenForm}>
          <BsPlusStyled className="footer-button-add" data-testid="add" />
        </FooterButton>
      );
    case 'ColorMode':
      return (
        <FooterButton onClick={handleColorMode}>
          <BsMoonStyled />
          <span>{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </FooterButton>
      );
    case 'Save':
      return (
        <div>
          <FooterButtonSave onClick={handleSaveButton}>
            <span>Save</span>
            {todoValidation && <span className="validation">Todo must be at least 3 characters and should not be empty</span>}
          </FooterButtonSave>
        </div>

      );
    default:
      return (
        <SearchButton />
      );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  todoTitle: PropTypes.string,
  userName: PropTypes.string,
};
Button.defaultProps = {
  todoTitle: '',
  userName: '',
};
export default Button;
