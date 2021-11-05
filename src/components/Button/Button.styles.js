import styled from 'styled-components';

export const Wrapper = styled.button`
  background: var(--green);
  height: 60px;
  min-width: 140px;
  border-radius: 10px;
  color: var(--white);
  border: 0;
  font-size: var(--fontSmall);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
