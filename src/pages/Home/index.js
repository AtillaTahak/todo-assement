import React from 'react';
import PropTypes from 'prop-types';
import Cards from '../../components/Cards';
import HomeBodyStyled from './Home.styled';

function Home({ fetchdata, error, loading }) {
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;
  return (
    <HomeBodyStyled>
      {fetchdata && fetchdata.map((repo) => (
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

Home.propTypes = {
  fetchdata: PropTypes.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
