import React from 'react';
import 'semantic-ui-css/semantic.css';

import 'semantic-ui-css/semantic.min.css';
import { Image, Dimmer } from 'semantic-ui-react';


export default class SliderDark extends React.Component {
  render() {
    const adjust = {marginTop: "0px", padding: "500px", backgroundColor: "rgba(0,0,0,0.6)"
  };
    return (

        <div id="slider">

          <figure>
            <Dimmer active style={adjust}/>
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

