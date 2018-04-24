import React from 'react';
import 'semantic-ui-css/semantic.css';
import SliderWithSearch from '../components/SliderWithSearch';
import TopPickHeader from '../components/TopPickHeader';
import Food from '../components/Food';

class UserHomepage extends React.Component {
  render() {
    return (
        <div>
          <SliderWithSearch/>
          <TopPickHeader/>
          <Food/>
        </div>

    );
  }
}

export default UserHomepage;
