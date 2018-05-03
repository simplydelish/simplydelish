import { Grid } from 'semantic-ui-react';
import React from 'react';
import 'semantic-ui-css/semantic.css';
import TopPickHeader from '../components/TopPickHeader';
import { Foods } from '/imports/api/food/food';
import FoodCard from '../components/FoodCard';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import SliderDark from '../components/SliderDark';

class UserHomepage extends React.Component {
  render() {
    const paddingAdjust = {paddingTop: "45px", paddingBottom: "95px"};
    const margFix = {marginTop: "-10px"};

    return (
        <div style={margFix}>
          <SliderDark/>
          <TopPickHeader/>
          <Grid centered>
            <Grid.Row style={paddingAdjust}>
              {this.props.foods.map((food) =>
                  <FoodCard
                      key={food._id}
                      image={food.image}
                      itemName={food.itemName}
                      vendorName={food.vendorName}
                      description={food.description}
                      numLikes={food.numLikes}
                      tags={food.tags}
                  />)}
            </Grid.Row>
          </Grid>
        </div>

    );
  }
}

UserHomepage.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Foods');
  return {
    foods: Foods.find({}, {sort: {numLikes: -1}}).fetch(),
    ready: subscription.ready(),
  };
})(UserHomepage);
