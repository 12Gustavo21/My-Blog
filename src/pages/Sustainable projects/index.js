import React from 'react'
import * as Geral from '../style';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <>
      <Geral.Header>
        <Geral.BoxList>
          <Geral.List>
            <Link to='/'> <Geral.Li>HOME</Geral.Li> </Link>
            <Link to='/About'> <Geral.Li>ABOUT ME</Geral.Li> </Link>
            <Link to='/Projects'> <Geral.Li>PROJECTS</Geral.Li> </Link>
          </Geral.List>
        </Geral.BoxList>
      </Geral.Header>
      <S.Main></S.Main>
    </>
  )
}