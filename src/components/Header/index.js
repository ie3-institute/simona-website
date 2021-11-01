import React from 'react';

import { Wrapper, Content, LogoImg } from './Header.styles';

import SimonaLogo from '../../images/simona_logo.png';

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={SimonaLogo} alt="SIMONA-logo" />
      <div>Home</div>
      <div>Publications</div>
      <div>Projects</div>
    </Content>
  </Wrapper>
);

export default Header;
