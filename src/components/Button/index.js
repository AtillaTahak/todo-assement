import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton, BsSearchStyled, BsMoonStyled, BsHouseStyled, BsPlusStyled,
  FooterButton, FooterButtonSave, ButtonSave,
} from './Button.styled';
import { DataContext, useContext } from '../../context/DataContext';
import useLocalStorage from '../../hooks/use-localstorage';
import useFetch from '../../hooks/useFetch';

function Button({
  type, todoTitle, userName, setGetFetchData,
}) {
  const { openForm, setOpenForm } = useContext(DataContext);
  const { colorMode, setColorMode } = useContext(DataContext);
  const url = 'https://63122757f5cba498da8daf58.mockapi.io/todos/';
  const [userNameLocal, setUserNameLocal] = useLocalStorage('name', []);
  const { // eslint-disable-next-line no-unused-vars
    data, error, loading, refetch,
  } = useFetch(url); // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars

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
    setOpenForm(!openForm);
  };
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
  const handleSave = () => {
    if (todoTitle !== '') {
      insertApi(url).then((data) => {
        setUserNameLocal([
          ...userNameLocal,
          {
            id: data.id,
            name: userName,
          },
        ]);
        setOpenForm(false);
      });

      setGetFetchData([
        ...data,
        {
          id: data.id,
          content: todoTitle,
          isCompleted: false,
        },
      ]);
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
        <FooterButtonSave onClick={handleSaveButton}>
          <ButtonSave onClick={handleSave}>Save</ButtonSave>
        </FooterButtonSave>
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
  setGetFetchData: PropTypes.func,
};
Button.defaultProps = {
  todoTitle: '',
  userName: '',
  setGetFetchData: () => {},
};
export default Button;
