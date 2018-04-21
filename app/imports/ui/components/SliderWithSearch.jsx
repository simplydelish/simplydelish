import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image , Grid, Search} from 'semantic-ui-react';

export default class SliderWithSearch extends React.Component {
  render() {
    const searchAdjust = {top: "10%", zIndex: "99999", position: "absolute"};
    const marginFix = {marginTop: "-10px"};
    return (
        <div id="slider" style={marginFix}>
          <Grid celled='internally'>
            <Grid.Row>
              <Search style={searchAdjust}/>
            </Grid.Row>
          </Grid>
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