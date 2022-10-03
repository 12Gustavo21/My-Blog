import React from 'react';
import { GlobalStyle } from './global/style';
import Cursor from './components/Cursor/index';
import Header from './components/header/index';

export default function App() {
  return (
    <>
      <Cursor />
      <GlobalStyle />
      <Header />
    </>
  );
}
