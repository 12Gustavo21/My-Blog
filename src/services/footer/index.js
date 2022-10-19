import React from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';

//Styles
import * as S from './style';
import * as HeaderStyle from '../../components/header/style';

export default function index() {
  return (
    <>
      <S.Footer>
        <Wave
          style={{ height: '100vh', position: 'absolute', bottom: '4px' }}
          fill='#0D0F36'
          paused={false}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.20,
            points: 4
          }}
        />
        <S.BoxList>
          <S.List>
            <Link to='/'> <HeaderStyle.Li>HOME</HeaderStyle.Li> </Link>
            <Link to='/about'> <HeaderStyle.Li>ABOUT ME</HeaderStyle.Li> </Link>
            <Link to='/projects'> <HeaderStyle.Li>PROJECTS</HeaderStyle.Li> </Link>
            <Link to='/sdgs'> <HeaderStyle.Li>SDGS</HeaderStyle.Li> </Link>
          </S.List>
        </S.BoxList>
      </S.Footer>
    </>
  )
}
