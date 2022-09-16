import React, { Fragment } from 'react';
import Button from '../Button';
import FooterStyled from './Footer.styled';
import { DataContext, useContext } from '../../context/DataContext';
import SaveForm from '../SaveForm';

function Footer() {
  const { openForm } = useContext(DataContext);

  console.log(openForm);
  return (
    <FooterStyled>
      {
        !openForm ? (
          <>
            <Button type="Home" />
            <Button type="Add" />
            <Button type="ColorMode" />
          </>
        ) : (
          <SaveForm />
        )
      }
    </FooterStyled>
  );
}

export default Footer;
