import styled from 'styled-components';

const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }
`;

export default SearchButton;
