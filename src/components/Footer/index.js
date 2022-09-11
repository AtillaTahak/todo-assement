import React from 'react';
import Button from '../Button';
import FooterStyled from './Footer.styled';

function Footer() {
  return (
    <FooterStyled>
      <Button type="Home" />
      <Button type="Add" />
      <Button type="ColorMode" />
    </FooterStyled>
  );
}

export default Footer;
