import { ThemeProvider } from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import theme from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Home from '../Home';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DataContext } from '../../context/DataContext';
import useFetch from '../../hooks/useFetch';

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [colorMode, setColorMode] = useState('light');
  const [methods, setMethods] = useState({});

  const appendMethod = (method) => {
    setMethods((prev) => ({ ...prev, [method.name]: method }));
  };

  const url = 'https://63122757f5cba498da8daf58.mockapi.io/todos';
  const { // eslint-disable-next-line no-unused-vars
    data, error, loading, refetch,
  } = useFetch(url); // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [getFetchData, setGetFetchData] = React.useState([]);
  React.useEffect(() => {
    axios(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => setGetFetchData(response.data));
  }, [data.length]);

  console.log(data.length);
  const dataContextApi = {
    openForm,
    setOpenForm,
    colorMode,
    setColorMode,
    ...methods,
    appendMethod,
  };
  useEffect(() => {
    if (colorMode === 'light') {
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.backgroundColor = '#000';
    }
  }, [colorMode]);
  return (
    <DataContext.Provider
      value={dataContextApi}
    >
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Home
            fetchdata={getFetchData}
            error={error}
            loading={loading}
            setGetFetchData={setGetFetchData}
          />
          <Footer
            setGetFetchData={refetch}
          />
        </div>
      </ThemeProvider>
    </DataContext.Provider>

  );
}

export default App;
