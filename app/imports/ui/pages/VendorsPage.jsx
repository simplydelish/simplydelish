import { Grid, Loader } from 'semantic-ui-react';
import React from 'react';
import VendorCard from '../components/VendorCard';
import { Vendors } from '/imports/api/vendor/vendor';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import VendorHead from '../components/VendorHead';

class VendorsPage extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  renderPage() {
    const paddingAdjust = {paddingTop: "45px", paddingBottom: "243px"};
    return (
        <div >
          <VendorHead/>
          <Grid centered>
            <Grid.Row style={paddingAdjust}>
              {this.props.vendors.map((vendor) =>
                  <VendorCard
                      key={vendor._id}
                      image={vendor.image}
                      title={vendor.title}
                      hours={vendor.hours}
                      description={vendor.description}
                  />)}
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

VendorsPage.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(VendorsPage);
