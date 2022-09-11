import React from 'react';
import Button from '../Button';
import HeaderDiv from './Header.styled';
import Input from '../Input';

function Header() {
  const handleSearch = () => {
    console.log('search');
  };
  return (
    <HeaderDiv>
      <Input type="search" placeholder="Search" />
      <Button type="search" onClick={handleSearch} />
    </HeaderDiv>
  );
}

export default Header;
