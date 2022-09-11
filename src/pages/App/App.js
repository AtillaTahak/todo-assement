import { ThemeProvider } from 'styled-components';
import theme from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Home from '../Home';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
