import React from 'react'
import * as Geral from '../style';
import * as S from './style';
import { Link } from 'react-router-dom';
import ObjetiveOne from '../../img/ObjectiveOne.png';
import ObjetiveTwo from '../../img/ObjectiveTwo.png';
import ObjetiveThree from '../../img/ObjectiveThree.png';
import ObjetiveFour from '../../img/ObjectiveFour.png';
import ObjetiveFive from '../../img/ObjectiveFive.png';

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
      <S.Main>
        <S.TitleBox>
          <S.Title>Sustainable Development Goals</S.Title>
          <S.Text>The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. And those are my goals for my small town.</S.Text>
        </S.TitleBox>
        <S.Container>
          <S.ObjectivesBox>
            <Link to='/afforestation' > <S.ObjectiveImage src={ObjetiveOne} alt="Objetive One" /> </Link>
            <Link to='/asphalt' > <S.ObjectiveImage src={ObjetiveTwo} alt="Objetive Two" /> </Link>
            <Link to='/education' > <S.ObjectiveImage src={ObjetiveThree} alt="Objetive Three" /> </Link>
            <Link to='/education' > <S.ObjectiveImage src={ObjetiveFour} alt="Objetive Four" /> </Link>
            <Link to='/animals' > <S.ObjectiveImage src={ObjetiveFive} alt="Objetive Five" /> </Link>
          </S.ObjectivesBox>
        </S.Container>
      </S.Main>
    </>
  )
}