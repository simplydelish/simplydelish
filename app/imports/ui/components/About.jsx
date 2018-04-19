import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

export default class About extends React.Component {

  render() {
    const colorA = {color: "#ffc40c", letterSpacing: "3px", fontSize: "40px"};
    const colorB = {color: "#b11b29", letterSpacing: "2px", fontSize: "40px"};
    const colorC = {color: "#ffffff", letterSpacing: "4px", fontSize: "40px"};
    const fat = {padding: "40px"};
    return (
        <Container textAlign="center" style={fat}>
          <Header as='h1'><span style={colorA}> easy. </span>
            <span style={colorB}> quick. </span> <span style={colorC}> yum.</span></Header>
        </Container>
    );
  }
}