import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: var(--lightGreen);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--fontSmall);
  padding: 0 60px;

  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  max-width: var(--maxWidth);
`;

export const NavLogo = styled.img`
  width: 50px;
  height: auto;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: var(--darkGrey);
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: var(--darkGrey);
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 0 0 3rem;
  height: 100%;

  &:hover {
    border-bottom: 3px solid var(--green);
  }

  &.active {
    border-bottom: 3px solid var(--green);
  }
`;
