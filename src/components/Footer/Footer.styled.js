import styled from 'styled-components';

const FooterStyled = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
`;

export default FooterStyled;
