import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';

export default class AddVendorHeader extends React.Component {

  render() {
    const colorA = { color: "#ffc40c", letterSpacing: "3px", fontSize: "40px" };
    const colorB = { color: "#b11b29", letterSpacing: "2px", fontSize: "40px" };
    const colorC = { color: "#ffffff", letterSpacing: "4px", fontSize: "40px" };
    const fat = { padding: "40px", margin: "-10px", marginBottom: "70px" };
    return (
        <Container textAlign="center" style={fat}>
          <Header as='h1' style={colorC}>ADD A VENDOR</Header>
        </Container>
    );
  }
}