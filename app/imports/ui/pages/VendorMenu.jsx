import { Grid, Loader } from 'semantic-ui-react';
import React from 'react';
import FoodCard from '../components/FoodCard';
import { Foods } from '/imports/api/food/food';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

class VendorMenu extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Grid centered>
          <Grid.Row>
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
    );
  }
}

VendorMenu.propTypes = {
  foods: PropTypes.array.isRequired,
  vendor: PropTypes.string,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Foods');
  return {
    foods: Foods.find({ vendorName: this.props.vendor }).fetch(),
    ready: subscription.ready(),
  };
})(VendorMenu);
