import styled from 'styled-components';

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 10vh;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vh;
    background-color: ${({ theme }) => theme.colors.primary};
    
`;

export default FooterStyled;
