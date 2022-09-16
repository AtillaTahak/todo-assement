import React from 'react';
import Cards from '../../components/Cards';
import HomeBodyStyled from './Home.styled';

function Home() {
  return (
    <HomeBodyStyled>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </HomeBodyStyled>
  );
}

export default Home;
