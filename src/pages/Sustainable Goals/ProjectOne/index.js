import React from 'react';
import ProjectPage from '../Project-Page';
import ObjectiveOne from '../../../img/ObjectiveOne.png';
import { Link } from 'react-router-dom';
import * as S from '../style';

export default function index() {
  return (
    <>
      <S.Header>
        <Link to="/sdgs"><S.Button>Go back</S.Button></Link>
      </S.Header>
      <ProjectPage ObjectiveName="Public Afforestation" 
      ObjectiveImage={ObjectiveOne} 
      ObjectiveDescription= "Many people cut down the city's trees just so they don't “waste” time cleaning the leaves. But trees are great for providing shade, obviously more oxygen, and the environment is cooler and cozier. So, using internet advertising, it would be possible to make people aware not to CUT PLANTS, and also encourage people to plant seedlings." />
    </>
  )
}
