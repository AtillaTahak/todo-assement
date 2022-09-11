import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.addButton {
  margin-bottom: 80px;
}
`;
export default GlobalStyle;
