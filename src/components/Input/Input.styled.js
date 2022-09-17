import styled from 'styled-components';

const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.primaryDark};
    }
`;

export default SearchInput;
