import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react';


export default class Slider extends React.Component {
  render() {
    return (

        <div id="slider">
          <figure>
            <Image fluid src="/images/cw_70.png"/>
            <Image fluid src="/images/oj_70.png"/>
            <Image fluid src="/images/av_70.png"/>
            <Image fluid src="/images/b_70.png"/>
            <Image fluid src="/images/cw_70.png"/>

          </figure>
        </div>


    );
  }
}