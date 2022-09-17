import React from 'react';
import Cards from '../../components/Cards';
import HomeBodyStyled from './Home.styled';
import { DataContext, useContext } from '../../context/DataContext';

function Home() {
  const { getFetchData } = useContext(DataContext);
  return (
    <HomeBodyStyled>
      {getFetchData && getFetchData.map((repo) => (
        <Cards
          key={repo.id}
          id={repo.id}
          title={repo.content}
          isCompleted={repo.isCompleted}
        />
      ))}
    </HomeBodyStyled>
  );
}

export default Home;
