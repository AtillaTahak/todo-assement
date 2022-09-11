import React from 'react';
import SearchButton from './Button.styled';

function index({ type }) {
  if (type === 'search') {
    return (
      <div>
        <SearchButton>Search</SearchButton>
      </div>
    );
  }
  return (
    <div>index</div>
  );
}

export default index;
