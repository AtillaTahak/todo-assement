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
.validation {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
`;
export default GlobalStyle;
