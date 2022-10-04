import React from 'react';
import * as S from './style';
import Logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <S.Header>
      <S.Container>
        <S.Figure>
          <S.SLink to='/' > <S.Logo src={Logo} alt='A big G' /> </S.SLink>
        </S.Figure>
        <S.BoxList>
          <S.List>
            <S.SLink to='/' > <S.Li>HOME</S.Li> </S.SLink>
            <S.Li>ABOUT ME</S.Li>
            <S.Li>PROJECTS</S.Li>
            <S.Li>SUSTAINABLE PROJECTS</S.Li>
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
