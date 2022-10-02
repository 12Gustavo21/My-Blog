import React from 'react';
import { GlobalStyle } from './global/style';
import Header from './components/header/index';
import Cursor from './components/Cursor/index'

export default function App() {
  return (
    <>
      <Cursor />
      <GlobalStyle />
      <Header />
    </>
  );
}
