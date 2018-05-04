import React from 'react';
import 'semantic-ui-css/semantic.css';
import Logo from '../components/Logo';
import Slider from '../components/Slider';
import About from '../components/About';
import Content from '../components/Content';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <Logo/>
          <Slider/>
          <About/>
          <Content/>
        </div>

    );
  }
}

export default Landing;
