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
            <S.Photo src={MyPhoto} alt='my photo' data-aos="flip-left" data-aos-duration="2500"/>
          </S.Figure>
          <S.Information>
            <S.Greetings>
              <S.GreetingsBox>
                <S.BoxOne data-aos="fade-right" data-aos-duration="2500">
                  <S.MyName>
                    I'm Gustavo
                  </S.MyName>
                  <S.MyName>
                    I'm Gustavo
                  </S.MyName>
                  <S.HI src={Hi} alt='Hand saying goodbye' />
                </S.BoxOne>
                <S.BoxTwo data-aos="fade-left" data-aos-duration="3000">
                  <S.Salutation>
                    WELCOME
                  </S.Salutation>
                </S.BoxTwo>
              </S.GreetingsBox>
            </S.Greetings>
            <S.SocialMedias>
              <S.Icons>
                <a href='https://github.com/12Gustavo21' target={'_blank'} rel="noreferrer"><S.Icon src={GitHub} alt='Github icon' data-aos="zoom-out" data-aos-duration="2000" /></a>
                <a href='https://www.linkedin.com/in/gustavo-almeida-421044246/' target={'_blank'} rel="noreferrer"><S.Icon src={Linkendin} alt='Linkendin icon' data-aos="zoom-out" data-aos-duration="2500" /></a>
                <a href='https://www.instagram.com/gustavo_almeida092/' target={'_blank'} rel="noreferrer"><S.Icon src={Intagram} alt='Instagram icon' data-aos="zoom-out" data-aos-duration="3000" /></a>
              </S.Icons>
            </S.SocialMedias>
          </S.Information>
        </S.Container>
      </S.Main>
    </>
  )
}
