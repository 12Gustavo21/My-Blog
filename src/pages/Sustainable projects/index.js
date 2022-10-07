import React from 'react'
import * as S from '../style';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <S.Header>
        <S.BoxList>
          <S.List>
            <Link to='/'> <S.Li>HOME</S.Li> </Link>
            <Link to='/About'> <S.Li>ABOUT ME</S.Li> </Link>
            <Link to='/Projects'> <S.Li>PROJECTS</S.Li> </Link>
          </S.List>
        </S.BoxList>
    </S.Header>
  )
}