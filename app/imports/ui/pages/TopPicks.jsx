import { Grid } from 'semantic-ui-react';
import React from 'react';
import FoodCard from '../components/FoodCard';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Foods } from '/imports/api/food/food';
import TopPicksHeader from '../components/TopPicksHeader';

class TopPicks extends React.Component {

  render() {
    const paddingAdjust = { paddingTop: "45px", paddingBottom: "95px" };

    return (
        <div className='background'>
          <TopPicksHeader/>
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

TopPicks.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Foods');
  return {
    foods: Foods.find({}, { sort: { numLikes: -1 } }).fetch(),
    ready: subscription.ready(),
  };
})(TopPicks);
