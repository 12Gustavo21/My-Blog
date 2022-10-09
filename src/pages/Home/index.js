import React from 'react';
import Header from '../../components/header/index';
import * as S from './style';
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
                <S.Icon src={GitHub} alt='' />
                <S.Icon src={Linkendin} alt='' />
                <S.Icon src={Intagram} alt='' />
              </S.Icons>
            </S.SocialMedias>
          </S.Information>
        </S.Container>
      </S.Main>
    </>
  )
}
