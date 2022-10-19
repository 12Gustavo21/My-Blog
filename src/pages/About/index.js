import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

// Styles
import * as Geral from '../style';
import * as S from './style';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
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
  const gallery = [
    {
      img: Photo2,
      alt: 'Landscape at night'
    },
    {
      img: Photo3,
      alt: 'Sunset landscape' 
    },
    {
      img: Photo4,
      alt: 'Flowers'
    },
    {
      img: Photo5,
      alt: 'Clouds landscape'
    },
    {
      img: Photo6,
      alt: 'Sleeping puppy'
    },
    {
      img: Photo7,
      alt: "St. John's bonfire"
    },
    {
      img: Photo8,
      alt: 'Sunset landscape'
    },
    {
      img: Photo9,
      alt: 'Glass corridor'
    },
    {
      img: Photo10,
      alt: 'Sunset landscape'
    },
    {
      img: Photo11,
      alt: 'My necklaces'
    },
    {
      img: Photo12,
      alt: 'Chandelier'
    },
    {
      img: Photo13,
      alt: 'Sunset landscape'
    },
    {
      img: Photo14,
      alt: 'Sunset landscape in the cactus'
    },
    {
      img: Photo15,
      alt: 'Sunset landscape'
    },
    {
      img: Photo16,
      alt: 'Sunshine on the rocks'
    },
    {
      img: Photo17,
      alt: 'Tree branches with a bird'
    },
    {
      img: Photo18,
      alt: 'Sunset landscape'
    },
  ];

  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    FocusOnSelect: true,
    speed: 3000,
    autoplaySpeed: 3000,
    adaptativeHeight: true,
    prevArrow: <S.PrevArrow />,
    nextArrow: <S.NextArrow />,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          fade: true,
          autoplay: false
        }
      }
    ]
  };

  return (
    <>
      <Geral.Header>
        <Geral.BoxList>
          <Geral.List>
            <Link to='/'> <Geral.Li>HOME</Geral.Li> </Link>
            <Link to='/Projects'> <Geral.Li>PROJECTS</Geral.Li> </Link>
            <Link to='/sdgs'> <Geral.Li>SDGS</Geral.Li> </Link>
          </Geral.List>
        </Geral.BoxList>
      </Geral.Header>
      <S.Main>
        <S.Container>
          <S.ContentBox>
            <S.CarouselTitle>MY FAVORITE PHOTOS</S.CarouselTitle>
            <Slider {...settings}>
              {gallery.map((photo, i) => (
                <div>
                  <S.Photo
                    key={i}
                    src={photo.img}
                    alt={photo.alt}
                  />
                </div>
              ))}
            </Slider>
            <S.AboutMe>
              <S.Description>
                <S.TextBox>
                  <S.MyText>Hi, I'm Gustavo. I don't know how you got here, but welcome. Well, the things I like are quite varied, I love kittens, appreciate the beauties of nature, and study technology. I'm currently studying A LOT to become a good front-end developer. I'm constantly trying to weigh personal studies against academics, seriously it's quite challenging. But I move on and never give up.</S.MyText>
                </S.TextBox>
                <S.PhotoBox>
                  <S.MyPhoto src={Photo1} alt='My photo' />
                </S.PhotoBox>
              </S.Description>
            </S.AboutMe>
          </S.ContentBox>
        </S.Container>
      </S.Main>
    </>
  )
}
