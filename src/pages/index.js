import React, { useState } from 'react';
// Components
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// Images
import IMGCharts from '../images/undraw/undraw_charts.svg';
import IMGServices from '../images/undraw/undraw_services.svg';
import Section from '../components/Section';
import CardSection from '../components/CardSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero></Hero>
      <CardSection />
      <Section
        textLeft={false}
        image={IMGCharts}
        header={'Simona Analysis'}
        paragraph={
          'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum'
        }
      />
      <Section
        textLeft={true}
        image={IMGServices}
        header={'Simulation Service'}
        paragraph={
          'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum'
        }
      />
    </>
  );
};

export default Home;
