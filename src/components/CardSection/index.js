import React from 'react';
import { Wrapper, Content, Cards } from './CardSection.styles';
import Card from '../Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const CardSection = () => {
  return (
    <Wrapper>
      <Content>
        <h2> What makes Simona special</h2>
        <Cards>
          <Card
            icon={<FontAwesomeIcon icon={faChartLine} />}
            heading={'Time Series Generation'}
            paragraph={
              'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.'
            }
          />
          <Card
            icon={<FontAwesomeIcon icon={faSolarPanel} />}
            heading={'Renewable Energies Modeling'}
            paragraph={
              'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.'
            }
          />
          <Card
            icon={<FontAwesomeIcon icon={faSolarPanel} />}
            heading={'Open Source Development'}
            paragraph={
              'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.'
            }
          />
        </Cards>
      </Content>
    </Wrapper>
  );
};

export default CardSection;
