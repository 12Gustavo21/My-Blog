import React from 'react';
import { GlobalStyle } from './global/style';
import Cursor from './components/Cursor/index';
import Routes from './services/Routess';

export default function App() {
  return (
    <>
      <Cursor />
      <GlobalStyle />
      <Routes />
    </>
  );
}
