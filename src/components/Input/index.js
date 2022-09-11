import React from 'react';
import SearchInput from './Input.styled';

function index(props) {
  if (props.type === 'search') {
    return (
      <div>
        <SearchInput />
      </div>
    );
  }
  return (
    <div>index</div>
  );
}

export default index;
