import React from 'react';
import * as S from './style';
import * as HeaderStyle from '../../components/header/style'
import Wave from 'react-wavify';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default function index() {
  return (
    <Router>
      <S.Footer>
        <section>
          <Wave
            style={{ height: '90vh', position: 'absolute' }}
            fill='#0D0F36'
            paused={false}
            options={{
              amplitude: 50,
              speed: 0.20,
              points: 4
            }}
          />
        </section>
        <S.BoxList>
          <S.List>
            <Link to='/'> <HeaderStyle.Li>HOME</HeaderStyle.Li> </Link>
            <Link to='/About'> <HeaderStyle.Li>ABOUT ME</HeaderStyle.Li> </Link>
            <Link to='/Projects'> <HeaderStyle.Li>PROJECTS</HeaderStyle.Li> </Link>
            <Link to='/Sustainable'> <HeaderStyle.Li>SUSTAINABLE PROJECTS</HeaderStyle.Li> </Link>
          </S.List>
        </S.BoxList>
      </S.Footer>
    </Router>
  )
}
