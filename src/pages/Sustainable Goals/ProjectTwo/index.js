import React from 'react';
import ProjectPage from '../Project-Page';
import ObjectiveTwo from '../../../img/ObjectiveTwo.png';
import { Link } from 'react-router-dom';
import * as S from '../style';

export default function index() {
  return (
    <>
      <S.Header>
        <Link to="/sdgs"><S.Button>Go back</S.Button></Link>
      </S.Header>
      <ProjectPage ObjectiveName="Public Asphalt"
        ObjectiveImage={ObjectiveTwo}
        ObjectiveDescription="The city streets are a little precarious on the asphalt, some streets are still on dirt and others suffer from potholes. In community action, residents of these streets would notify the infrastructure secretary and demand swift action. If after a while they don't fix the problems, the residents would notify the mayor demanding quick action." />
    </>
  )
}
