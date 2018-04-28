import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';

export default class SignedOutHeader extends React.Component {

  render() {
    const colorA = {color: "#ffc40c", letterSpacing: "3px", fontSize: "40px"};
    const colorB = {color: "#b11b29", letterSpacing: "2px", fontSize: "40px"};
    const colorC = {color: "#ffffff", letterSpacing: "4px", fontSize: "40px"};
    const fat = {padding: "125px", paddingBottom:"613px", margin: "-10px", background: "#FD7328"};
    return (
        <Container textAlign="center" style={fat}>
          <Header as='h1' style={colorC}>YOU ARE SIGNED OUT.</Header>
          <p>come back when you want somehthing to eat</p>
        </Container>
    );
  }
}