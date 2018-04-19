import React from 'react';
import 'semantic-ui-css/semantic.css';

import 'semantic-ui-css/semantic.min.css';
import { Segment, Container } from 'semantic-ui-react';

export default class Content extends React.Component {

  render() {
    const aboutColor = {backgroundColor: "white",  boxShadow: "none",
      border: "none", margin: "2rem 183px"};
    const text = {color: "black", fontSize: "18.5px"};
    const pretty = {padding: "40px" , background: "white", width: "100%"};
    return (
        <Container  style={pretty}>
        <Segment textAlign="center" style={aboutColor}>
          <p style={text}>Simply Delish is an application that resolves the problem of there being many food choices on campus. This app allows you to know what specific menu items will be available today at campus center locations, and as well as tell what food is available at the moment. It can also tailor to the style of food you love and let you know when it is available.</p>
          <p style={text}>Our goal at Simply Delish is to provide ease for Manoa students into finding their next delicious meal on campus.</p>
        </Segment>
        </Container>
    );
  }
}