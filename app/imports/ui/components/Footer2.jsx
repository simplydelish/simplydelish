import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */

class Footer extends React.Component {

  render() {
    const header = {fontSize: "1em", color: "white" , letterSpacing: "3px"};
    const footercolor = {backgroundColor: "#b11b29"};
    const marginFix = {marginRight: "1px"};
    return (
        <Container textAlign="center" style={footercolor}>
          <Header as='h1' style={header}>made with <Icon name='heart' size='big' style={marginFix}/> in hawaii</Header>
        </Container>
    );
  }
}

export default Footer;
