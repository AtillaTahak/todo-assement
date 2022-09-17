import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    .title {
        color: ${({ theme }) => theme.colors.white};
        font-size: 32px;
        font-weight: 700;
        line-height: 37px;
    }
`;

export default HeaderDiv;
