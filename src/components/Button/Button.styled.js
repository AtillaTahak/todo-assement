import styled from 'styled-components';
import {
  BsSearch, BsHouse, BsPlus, BsMoon, BsSun,
} from 'react-icons/bs';

const BsHouseStyled = styled(BsHouse)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
    margin-bottom: 5px;
`;

const BsPlusStyled = styled(BsPlus)`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
`;

const BsMoonStyled = styled(BsMoon)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
    margin-bottom: 5px;

`;

const BsSunStyled = styled(BsSun)`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
    margin-bottom: 5px;

`;

const FooterButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.transparent};
    padding: 10px 20px;
    border: none;
    font-size: 16px;
    margin-left: 10px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }
`;

const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    display: flex;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    margin-left: 10px;
    font-weight: 600;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }
`;

const BsSearchStyled = styled(BsSearch)`
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
    }
`;

const FooterButtonSave = styled.button`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }
`;
const ButtonSave = styled.button`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDark};
    }
`;

export {
  SearchButton, BsSearchStyled, BsMoonStyled, BsSunStyled, BsHouseStyled, BsPlusStyled,
  FooterButton, FooterButtonSave, ButtonSave,
};
