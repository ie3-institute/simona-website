import React, { useState } from 'react';
// Components
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// Images
import IMGControlPanel from '../images/undraw/undraw_control_panel.svg';
import SectionRight from '../components/SectionRight';

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
      <SectionRight
        image={IMGControlPanel}
        header={'Simona Analysis'}
        paragraph={
          'Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum'
        }
      />
      <div>HELLO WORLD</div>
    </>
  );
};

export default Home;
