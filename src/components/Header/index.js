import React from 'react';
import Button from '../Button';
import HeaderDiv from './Header.styled';
import Input from '../Input';

function index({ title }) {
  const handleSearch = () => {
    console.log('search');
  };
  return (
    <HeaderDiv>
      <h1>{title}</h1>
      <Input type="search" placeholder="Search" />
      <Button type="search" onClick={handleSearch} />
    </HeaderDiv>
  );
}

export default index;
