import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>App</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
