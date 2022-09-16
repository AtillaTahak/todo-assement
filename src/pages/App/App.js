import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import theme from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Home from '../Home';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DataContext } from '../../context/DataContext';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [colorMode, setColorMode] = useState('light');
  const [methods, setMethods] = useState({});

  const appendMethod = (method) => {
    setMethods((prev) => ({ ...prev, [method.name]: method }));
  };

  const data = {
    openForm,
    setOpenForm,
    colorMode,
    setColorMode,
    ...methods,
    appendMethod,
  };
  return (
    <DataContext.Provider
      value={data}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Home />
          <Footer />
        </div>
      </ThemeProvider>
    </DataContext.Provider>

  );
}

export default App;
