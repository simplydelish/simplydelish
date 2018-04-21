import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container , Header} from 'semantic-ui-react';

export default class TopPickHeader extends React.Component {

  render() {
    const colorT = {color: "#fffcd9", letterSpacing: "3px", fontSize: "40px"};
    const fat = {padding: "40px", color: "#f15a29", width: "100%"};
    return (
        <Container textAlign="center" style={fat}>
          <Header as='h1' style={colorT}>TODAY'S TOP PICKS</Header>
        </Container>
    );
  }
}