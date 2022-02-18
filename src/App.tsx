import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import LayoutComponent from './components/Layout';
import BasicAppBar from './components/BasicAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Button } from '@mui/material';
import { render } from '@testing-library/react';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff5f52',
      main: '#961111',
      //main: '#c62828',
      dark: '#8e0000'
    },
    secondary: {
      light: '#ffffb3',
      main: '#ffe082',
      dark: '#caae53'
    },
  },
});


export interface IApplicatinoProps {};

const App: React.FunctionComponent<IApplicatinoProps> = (props) => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}>
              <Route path=':page' element={<HomePage></HomePage>}></Route>
          </Route>
          <Route path='/home' element={<HomePage></HomePage>}>
              <Route path=':page' element={<HomePage></HomePage>}></Route>
          </Route>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
