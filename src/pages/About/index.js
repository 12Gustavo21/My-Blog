import React from 'react';
import * as Geral from '../style';
import * as S from './style';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import Photo1 from '../../img/Photo1.jpg';
import Photo2 from '../../img/Photo2.webp';
import Photo3 from '../../img/Photo3.webp';
import Photo4 from '../../img/Photo4.webp';
import Photo5 from '../../img/Photo5.jpg';
import Photo6 from '../../img/Photo6.jpg';
import Photo7 from '../../img/Photo7.webp';
import Photo8 from '../../img/Photo8.webp';
import Photo9 from '../../img/Photo9.jpg';
import Photo10 from '../../img/Photo10.jpg';
import Photo11 from '../../img/Photo11.webp';
import Photo12 from '../../img/Photo12.jpg';
import Photo13 from '../../img/Photo13.webp';
import Photo14 from '../../img/Photo14.webp';
import Photo15 from '../../img/Photo15.webp';
import Photo16 from '../../img/Photo16.webp';
import Photo17 from '../../img/Photo17.jpg';
import Photo18 from '../../img/Photo18.webp';

export default function index() {
  return (
    <>
      <Geral.Header>
        <Geral.BoxList>
          <Geral.List>
            <Link to='/'> <Geral.Li>HOME</Geral.Li> </Link>
            <Link to='/Projects'> <Geral.Li>PROJECTS</Geral.Li> </Link>
            <Link to='/Sustainable'> <Geral.Li>SUSTAINABLE PROJECTS</Geral.Li> </Link>
          </Geral.List>
        </Geral.BoxList>
      </Geral.Header>
      <S.Main>
        <S.Container>
          <S.ContentBox>
            <S.CarouselBox>
              <S.CarouselTitle>MY FAVORITE PHOTOS</S.CarouselTitle>
              <Carousel
                autoplay={true}
                autoplayInterval={2000}
                slidesToShow={2.5}
                wrapAround={true}
                enableKeyboardControls={true}
                cellAlign='center'
                cellSpacing={10}
                renderBottomCenterControls={false}
                defaultControlsConfig={{
                  nextButtonText: '>',
                  prevButtonText: '<',
                  prevButtonStyle: {
                    background: '#75D5E6',
                    color: '#000',
                    opacity: '0.6'
                  },
                  nextButtonStyle: {
                    background: '#75D5E6',
                    color: '#000',
                    opacity: '0.6'
                  }
                }}
                animation='zoom'
                zoomScale={.95}
              >
                <S.Photo src={Photo2} alt='Favorite photo' />
                <S.Photo src={Photo3} alt='Favorite photo' />
                <S.Photo src={Photo4} alt='Favorite photo' />
                <S.Photo src={Photo5} alt='Favorite photo' />
                <S.Photo src={Photo6} alt='Favorite photo' />
                <S.Photo src={Photo7} alt='Favorite photo' />
                <S.Photo src={Photo8} alt='Favorite photo' />
                <S.Photo src={Photo9} alt='Favorite photo' />
                <S.Photo src={Photo10} alt='Favorite photo' />
                <S.Photo src={Photo11} alt='Favorite photo' />
                <S.Photo src={Photo12} alt='Favorite photo' />
                <S.Photo src={Photo13} alt='Favorite photo' />
                <S.Photo src={Photo14} alt='Favorite photo' />
                <S.Photo src={Photo15} alt='Favorite photo' />
                <S.Photo src={Photo16} alt='Favorite photo' />
                <S.Photo src={Photo17} alt='Favorite photo' />
                <S.Photo src={Photo18} alt='Favorite photo' />
              </Carousel>
            </S.CarouselBox>
            <S.AboutMe>
              <S.Description>
                <S.MyText>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </S.MyText>
                <S.MyPhoto src={Photo1} alt='My photo' />
              </S.Description>
            </S.AboutMe>
          </S.ContentBox>
        </S.Container>
      </S.Main>
    </>
  )
}
