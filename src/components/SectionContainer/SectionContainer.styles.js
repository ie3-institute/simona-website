import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SectionContent = styled.div`
  max-width: var(--maxWidth);
  margin: 0 60px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column-reverse;
  }
`;
