import React from "react";
import Link from 'next/link'
import styled from "styled-components";

const FooterWrapper = styled.article`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  bottom: 0;
  height: 10vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
`;

const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: small;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  :hover {
    opacity: .5;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <MenuItem href='/receitas'>Home</MenuItem>
      <MenuItem href='/'>Perfil</MenuItem>
      <MenuItem href='/'>Favoritos</MenuItem>
      <MenuItem href='/'>Buscar</MenuItem>
      <MenuItem href='/'>Conteúdos</MenuItem>
    </FooterWrapper>
  );
};

export default Footer;
