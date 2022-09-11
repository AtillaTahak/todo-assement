import { ThemeProvider } from 'styled-components';
import theme from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Header from '../../components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header title="My Tasks" />
      </div>
    </ThemeProvider>
  );
}

export default App;
