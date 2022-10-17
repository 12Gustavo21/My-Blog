import React from 'react';
import ProjectPage from '../Project-Page';
import ObjectiveThree from '../../../img/ObjectiveThree.png';
import { Link } from 'react-router-dom';
import * as S from '../style';

export default function index() {
  return (
    <>
      <S.Header>
        <Link to="/sdgs"><S.Button>Go back</S.Button></Link>
      </S.Header>
      <ProjectPage ObjectiveName="Public Education"
        ObjectiveImage={ObjectiveThree}
        ObjectiveDescription="Some schools lack teachers, making access to education difficult for children, youth and adults. To solve this problem, the directors of these schools will have to talk to the city's education department, describing the entire current situation. If this issue is not resolved, the directors will speak to the mayor personally." />
    </>
  )
}
