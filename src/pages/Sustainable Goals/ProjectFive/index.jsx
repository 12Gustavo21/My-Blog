import React from 'react';
import ProjectPage from '../Project-Page';
import { Link } from 'react-router-dom';

//Styles
import * as S from '../style';

//Images
import ObjectiveFive from '../../../img/ObjectiveFive.png';

export default function index() {
  return (
    <>
      <S.Header>
        <Link to="/sdgs"><S.Button>Go back</S.Button></Link>
      </S.Header>
      <ProjectPage ObjectiveName="Street Animals"
        ObjectiveImage={ObjectiveFive}
        ObjectiveDescription="Many residents abandon animals on the streets just because they don't want to or can't raise them. To reduce the rate of abandonment of strays, residents would have to notify on their social networks that they would be putting their animals up for adoption." />
    </>
  )
}
