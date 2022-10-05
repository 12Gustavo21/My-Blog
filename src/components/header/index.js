import React from 'react';
import * as S from './style';
import Logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <S.Header>
      <S.Container>
        <S.Figure>
          <Link to='/' > <S.Logo src={Logo} alt='A big G' /> </Link>
        </S.Figure>
        <S.BoxList>
          <S.List>
            <Link to='/' > <S.Li>HOME</S.Li> </Link>
            <Link to='/About'> <S.Li>ABOUT ME</S.Li> </Link>
            <Link to='/Projects'> <S.Li>PROJECTS</S.Li> </Link>
            <Link to='/Sustainable'> <S.Li>SUSTAINABLE PROJECTS</S.Li> </Link>
          </S.List>
          <S.Menu>
            <S.Line></S.Line>
            <S.Line></S.Line>
          </S.Menu>
        </S.BoxList>
      </S.Container>
    </S.Header>
  )
}
