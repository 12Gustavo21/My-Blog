import React from 'react';
import Header from '../../components/header/index';

//Styles
import * as S from './style';

//Images
import MyPhoto from '../../img/me.jpg';
import Hi from '../../img/hi.gif';
import GitHub from '../../img/Github-icon.png';
import Linkendin from '../../img/Linkendin-icon.png';
import Intagram from '../../img/Instagram-icon.png';

export default function index() {
  return (
    <>
      <Header />
      <S.Main>
        <S.Container>
          <S.Figure>
            <S.Photo src={MyPhoto} alt='my photo' />
          </S.Figure>
          <S.Information>
            <S.Greetings>
              <S.GreetingsBox>
                <S.BoxOne>
                  <S.MyName>
                    I'm Gustavo
                  </S.MyName>
                  <S.MyName>
                    I'm Gustavo
                  </S.MyName>
                  <S.HI src={Hi} alt='Hand saying goodbye' />
                </S.BoxOne>
                <S.BoxTwo>
                  <S.Salutation>
                    WELCOME
                  </S.Salutation>
                </S.BoxTwo>
              </S.GreetingsBox>
            </S.Greetings>
            <S.SocialMedias>
              <S.Icons>
                <a href='https://github.com/12Gustavo21' target={'_blank'} rel="noreferrer"><S.Icon src={GitHub} alt='Github icon' /></a>
                <a href='https://www.linkedin.com/in/gustavo-almeida-421044246/' target={'_blank'} rel="noreferrer"><S.Icon src={Linkendin} alt='Linkendin icon' /></a>
                <a href='https://www.instagram.com/gustavo_almeida092/' target={'_blank'} rel="noreferrer"><S.Icon src={Intagram} alt='Instagram icon' /></a>
              </S.Icons>
            </S.SocialMedias>
          </S.Information>
        </S.Container>
      </S.Main>
    </>
  )
}
