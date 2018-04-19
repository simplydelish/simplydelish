import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react';


export default class Logo extends React.Component {
  render() {
    return (
        <Image fluid src="/images/logov2.png" />
    );
  }
}