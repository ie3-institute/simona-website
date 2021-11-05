import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const Content = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  h2 {
    margin: 100px auto 80px auto;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  max-width: var(--maxWidth);

  @media screen and (max-width: 1060px) {
    flex-direction: column;
  }
`;
