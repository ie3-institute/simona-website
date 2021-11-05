import React from 'react';
import Button from '../Button';
import { Wrapper, Content } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <h2>Want to learn more?</h2>
        <Button text="Go to docs" />
      </Content>
    </Wrapper>
  );
};

export default Footer;
