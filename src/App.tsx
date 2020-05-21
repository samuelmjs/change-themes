import React, { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import GlobalStyles from './styles/global';
import Routes from './routes';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
