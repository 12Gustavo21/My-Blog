import React from 'react';
import * as S from './style';

export default function index(props) {
  return (
    <>
      <S.Main>
        <S.Title>{props.ObjectiveName}</S.Title>
        <S.Container>
          <S.ContentBox>
            <S.ImageBox>
              <S.ProjectImage src={props.ObjectiveImage} alt={props.ObjectiveName} />
            </S.ImageBox>
            <S.TextBox>
              <S.Description>{props.ObjectiveDescription}</S.Description>
            </S.TextBox>
          </S.ContentBox>
        </S.Container>
      </S.Main>
    </>
  )
}
