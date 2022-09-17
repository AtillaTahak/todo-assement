import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import FooterStyled from './Footer.styled';
import { DataContext, useContext } from '../../context/DataContext';
import SaveForm from '../SaveForm';

function Footer({ setGetFetchData }) {
  const { openForm } = useContext(DataContext);

  console.log(openForm);
  return (
    <FooterStyled>
      {
        !openForm ? (
          <>
            <Button type="Home" />
            <Button type="Add" setGetFetchData={setGetFetchData} />
            <Button type="ColorMode" />
          </>
        ) : (
          <SaveForm />
        )
      }
    </FooterStyled>
  );
}

Footer.propTypes = {
  setGetFetchData: PropTypes.func.isRequired,
};

export default Footer;
