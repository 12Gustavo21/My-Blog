import React from 'react';
import * as S from './style';
import Logo from '../../img/Logo.png';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <S.Header>
      <S.Container>
        <S.Figure>
          <S.Logo src={Logo} alt='A big G' />
        </S.Figure>
        <S.BoxList>
          <S.List>
            <Link to='/about'> <S.Li>ABOUT ME</S.Li> </Link>
            <Link to='/projects'> <S.Li>PROJECTS</S.Li> </Link>
            <Link to='/sdgs'> <S.Li>SDGS</S.Li> </Link>
          </S.List>
        </S.BoxList>
      </S.Container>
    </S.Header>
  )
}
