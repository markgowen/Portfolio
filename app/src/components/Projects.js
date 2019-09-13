import React from 'react';
import styled from 'styled-components';
import GitHub from '../assets/bytesize-github.svg';
import Link from '../assets/Link icon.svg';

const ProjectsContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const SectionTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  color: #292f33;
  text-align: left;
  margin-top: 10%;
  margin-left: 10%;
`;

const TitleLine = styled.hr`
  width: 10%;
  border: 6px solid #ffcc4d;
  margin-left: 10%;
`;

const Card = styled.div``;

export default function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <TitleLine></TitleLine>
    </ProjectsContainer>
  );
}
