import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

export default class TopPicksHeader extends React.Component {

  render() {
    const colorT = { color: "#fffcd9", letterSpacing: "3px", fontSize: "40px" };
    const fat = { padding: "40px", color: "#f15a29", width: "100%", marginTop: "-10px" };
    return (
        <Container textAlign="center" style={fat}>
          <Header as='h1' style={colorT}>TOP PICKS</Header>
        </Container>
    );
  }
}