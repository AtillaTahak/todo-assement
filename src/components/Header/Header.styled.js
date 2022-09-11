import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
`;

export default HeaderDiv;
