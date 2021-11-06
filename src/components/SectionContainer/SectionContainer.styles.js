import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SectionContent = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 60px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: ${({ textLeft }) =>
      textLeft ? 'column' : 'column-reverse'};
    margin: 60px;
    height: 100%;
  }
`;
