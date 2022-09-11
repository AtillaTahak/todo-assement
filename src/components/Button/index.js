import React from 'react';
import {
  SearchButton, BsSearchStyled, BsMoonStyled, BsHouseStyled, BsPlusStyled,
  FooterButton,
} from './Button.styled';

function index({ type }) {
  if (type === 'search') {
    return (
      <div>
        <SearchButton>
          Search
          <BsSearchStyled />
        </SearchButton>
      </div>
    );
  }
  if (type === 'Home') {
    return (
      <FooterButton>
        <BsHouseStyled />
        <span>Home</span>
      </FooterButton>
    );
  }
  if (type === 'Add') {
    return (
      <FooterButton className="addButton">
        <BsPlusStyled className="footer-button-add" />
      </FooterButton>
    );
  }
  if (type === 'ColorMode') {
    return (
      <FooterButton>
        <BsMoonStyled />
        <span>Dark Mode</span>
      </FooterButton>
    );
  }

  return (
    <div>index</div>
  );
}

export default index;
