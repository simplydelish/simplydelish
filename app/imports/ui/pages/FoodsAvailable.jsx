import { Grid, Loader } from 'semantic-ui-react';
import React from 'react';
import FoodCard from '../components/FoodCard';
import { Vendors } from '/imports/api/vendor/vendor';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

class FoodsAvailable extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className='background'>
          <Grid centered>
            <Grid.Row>
              {this.props.vendors.map((vendor) =>
                  <FoodCard
                      key={vendor._id}
                      image={vendor.image}
                      title={vendor.title}
                      hours={vendor.hours}
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

FoodsAvailable.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(FoodsAvailable);
