import React from 'react';
import { GlobalStyle } from './global/style';
import Cursor from './services/Cursor/index';
import Routes from './services/Ways';

export default function App() {
  return (
    <>
      <Cursor />
      <GlobalStyle />
      <Routes />
    </>
  );
}
