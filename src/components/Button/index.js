import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton, BsSearchStyled, BsMoonStyled, BsHouseStyled, BsPlusStyled,
  FooterButton, FooterButtonSave,
} from './Button.styled';
import { DataContext, useContext } from '../../context/DataContext';

function Button({ type }) {
  const { openForm, setOpenForm } = useContext(DataContext);
  const { colorMode, setColorMode } = useContext(DataContext);
  const handleOpenForm = () => {
    setOpenForm(!openForm);
    console.log(openForm);
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
          <span>{ colorMode === 'light' ? 'Dark Mode' : 'Light Mode' }</span>
        </FooterButton>
      );
    case 'Save':
      return (
        <FooterButtonSave onClick={handleSaveButton}>
          <span>Save</span>
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
};
export default Button;
