import React from 'react';
import ProjectPage from '../Project-Page';
import ObjectiveFour from '../../../img/ObjectiveFour.png';
import { Link } from 'react-router-dom';
import * as S from '../style';

export default function index() {
  return (
    <>
      <S.Header>
        <Link to="/sdgs"><S.Button>Go back</S.Button></Link>
      </S.Header>
      <ProjectPage ObjectiveName="Public Safety"
        ObjectiveImage={ObjectiveFour}
        ObjectiveDescription="The city is not very safe with the few police officers it has. The Municipal Guard would have to talk to the secretary of public security asking for reinforcements from the municipal platoon. If this issue is not resolved, the Municipal Guard will speak personally with the mayor asking for immediate action." />
    </>
  )
}
