import React from 'react';
import * as Geral from '../style';
import * as S from './style'
import { Link } from 'react-router-dom';
import ToDo from '../../img/Cat-to-do.png';
import EagleFlix from '../../img/EagleFlix.png';
import HarryPotter from '../../img/Harry-Potter-API.png';
import Puppies from '../../img/Puppies-api.png';
import Recipes from '../../img/Recipes.png';
import GithubIcon from '../../img/GithubIcon.png';
import NetlifyIcon from '../../img/NetlifyIcon.png';

export default function index() {
  return (
    <>
      <Geral.Header>
        <Geral.BoxList>
          <Geral.List>
            <Link to='/'> <Geral.Li>HOME</Geral.Li> </Link>
            <Link to='/About'> <Geral.Li>ABOUT ME</Geral.Li> </Link>
            <Link to='/sdgs'> <Geral.Li>SDGS</Geral.Li> </Link>
          </Geral.List>
        </Geral.BoxList>
      </Geral.Header>
      <S.Main>
        <S.Container>
          <S.Title>MY PROJECTS</S.Title>
          <S.Projects>
            <S.ProjectBox>
              <S.Acess>
                <S.AcessBox>
                  <a href='https://github.com/12Gustavo21/Movie-API.git' target={'_blank'} rel="noreferrer"> <S.Icon src={GithubIcon} alt='Github Icon' /> </a>
                  <a href='https://github.com/12Gustavo21/Movie-API.git' target={'_blank'} rel="noreferrer"><S.Link>Repository</S.Link></a>
                </S.AcessBox>
                <S.AcessBox>
                  <a href='https://eagleflix.netlify.app' target={'_blank'} rel="noreferrer"> <S.Icon src={NetlifyIcon} alt='Netlify Icon' /> </a>
                  <a href='https://eagleflix.netlify.app' target={'_blank'} rel="noreferrer"><S.Link>Deploy</S.Link></a>
                </S.AcessBox>
              </S.Acess>
              <S.ProjectImageBox>
                <S.ProjectPhoto src={EagleFlix} alt='EagleFlix project image' />
              </S.ProjectImageBox>
            </S.ProjectBox>
            <S.ProjectBox>
              <S.ProjectImageBox>
                <S.ProjectPhoto src={HarryPotter} alt='Harry Potter project image' />
              </S.ProjectImageBox>
              <S.Acess>
                <S.AcessBox>
                  <a href='https://github.com/12Gustavo21/Harry-Potter_API.git' target={'_blank'} rel="noreferrer"> <S.Icon src={GithubIcon} alt='Github Icon' /> </a>
                  <a href='https://github.com/12Gustavo21/Harry-Potter_API.git' target={'_blank'} rel="noreferrer"><S.Link>Repository</S.Link></a>
                </S.AcessBox>
                <S.AcessBox>
                  <a href='https://harry-potterapi.netlify.app' target={'_blank'} rel="noreferrer"> <S.Icon src={NetlifyIcon} alt='Netlify Icon' /> </a>
                  <a href='https://harry-potterapi.netlify.app' target={'_blank'} rel="noreferrer"><S.Link>Deploy</S.Link></a>
                </S.AcessBox>
              </S.Acess>
            </S.ProjectBox>
            <S.ProjectBox>
              <S.Acess>
                <S.AcessBox>
                  <a href='https://github.com/12Gustavo21/Dog-API.git' target={'_blank'} rel="noreferrer"> <S.Icon src={GithubIcon} alt='Github Icon' /> </a>
                  <a href='https://github.com/12Gustavo21/Dog-API.git' target={'_blank'} rel="noreferrer"><S.Link>Repository</S.Link></a>
                </S.AcessBox>
                <S.AcessBox>
                  <a href='https://dogapi-project.netlify.app' target={'_blank'} rel="noreferrer"> <S.Icon src={NetlifyIcon} alt='Netlify Icon' /> </a>
                  <a href='https://dogapi-project.netlify.app' target={'_blank'} rel="noreferrer"><S.Link>Deploy</S.Link></a>
                </S.AcessBox>
              </S.Acess>
              <S.ProjectImageBox>
                <S.ProjectPhoto src={Puppies} alt='Puppies project image' />
              </S.ProjectImageBox>
            </S.ProjectBox>
            <S.ProjectBox>
              <S.ProjectImageBox>
                <S.ProjectPhoto src={ToDo} alt='To do project image' />
              </S.ProjectImageBox>
              <S.Acess>
                <S.AcessBox>
                  <a href='https://github.com/12Gustavo21/To-do-2.0.git' target={'_blank'} rel="noreferrer"> <S.Icon src={GithubIcon} alt='Github Icon' /> </a>
                  <a href='https://github.com/12Gustavo21/To-do-2.0.git' target={'_blank'} rel="noreferrer"><S.Link>Repository</S.Link></a>
                </S.AcessBox>
                <S.AcessBox>
                  <a href='https://cat-to-do.netlify.app' target={'_blank'} rel="noreferrer"> <S.Icon src={NetlifyIcon} alt='Netlify Icon' /> </a>
                  <a href='https://cat-to-do.netlify.app' target={'_blank'} rel="noreferrer"><S.Link>Deploy</S.Link></a>
                </S.AcessBox>
              </S.Acess>
            </S.ProjectBox>
            <S.ProjectBox>
              <S.Acess>
                <S.AcessBox>
                  <a href='https://github.com/12Gustavo21/Recipes.git' target={'_blank'} rel="noreferrer"> <S.Icon src={GithubIcon} alt='Github Icon' /> </a>
                  <a href='https://github.com/12Gustavo21/Recipes.git' target={'_blank'} rel="noreferrer"><S.Link>Repository</S.Link></a>
                </S.AcessBox>
                <S.AcessBox>
                  <a href='https://recipes-vainaweb.netlify.app' target={'_blank'} rel="noreferrer"> <S.Icon src={NetlifyIcon} alt='Netlify Icon' /> </a>
                  <a href='https://recipes-vainaweb.netlify.app' target={'_blank'} rel="noreferrer"><S.Link>Deploy</S.Link></a>
                </S.AcessBox>
              </S.Acess>
              <S.ProjectImageBox>
                <S.ProjectPhoto src={Recipes} alt='Recipes project image' />
              </S.ProjectImageBox>
            </S.ProjectBox>
          </S.Projects>
        </S.Container>
      </S.Main>
    </>
  )
}
