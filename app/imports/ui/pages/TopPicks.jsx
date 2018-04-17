import { Grid } from 'semantic-ui-react';
import React from 'react';
import FoodCard from '../components/FoodCard';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Foods } from '/imports/api/food/food';

class TopPicks extends React.Component {
  render() {
    return (
        <div className='background'>
          <Grid centered>
            <Grid.Row>
              {this.props.foods.map((vendor) =>
                  <FoodCard
                      key={vendor._id}
                      image={vendor.image}
                      itemName={vendor.itemName}
                      vendorName={vendor.vendorName}
                      description={vendor.description}
                      numReviews={vendor.numReviews}
                      numLikes={vendor.numLikes}
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
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(TopPicks);
