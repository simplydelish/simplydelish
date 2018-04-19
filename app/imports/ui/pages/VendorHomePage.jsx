import React from 'react';
import { Grid, Header, Form, Card, Image, Button } from 'semantic-ui-react';
import FoodCard from '../components/FoodCard';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Foods } from '/imports/api/food/food';

/** A simple static component to render some text for the landing page. */
class VendorHomePage extends React.Component {
  render() {
    return (
          <Grid>
            <Grid.Column width={4} style={{ marginLeft: '150px' }}>
              <Card>
                <Card.Content>
                  <Image floated='right' size='big'
                         src='http://yoensalada.es/wp-content/uploads/2017/06/LogoPortada-1024x682-990x420.jpg'/>
                  <Card.Header>
                    En Saladas
                  </Card.Header>
                  <Card.Meta>
                    Paradise Palms
                  </Card.Meta>
                  <Card.Description>
                    Beyond the world passport dishes, En Saladas serves up the most savory selection of 6 different
                    salads, with an option to create your own - plus unforgettable taco dishes.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Edit</Button>
                    <Button basic color='red'>Delete</Button>
                  </div>
                </Card.Content>
              </Card>

            </Grid.Column>

            <Grid.Column width={9}>

              <Header as="h2" textAlign="center">Add Item</Header>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input label='Menu Item' placeholder='Menu Item'/>
                </Form.Group>
                <Form.TextArea label='Description' placeholder='Tell us more about this item...'/>
                <Form.Group widths='equal'>
                  <Form.Input label='Image' placeholder='Give us an image...'/>
                </Form.Group>
                <Form.Button>Add Item</Form.Button>
              </Form>
            </Grid.Column>

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
    );
  }
}


VendorHomePage.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe('Foods');
  return {
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(VendorHomePage);
