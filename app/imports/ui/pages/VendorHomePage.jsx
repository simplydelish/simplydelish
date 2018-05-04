import React from 'react';
import { Grid, Header, Card, Image, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Foods, FoodSchema } from '/imports/api/food/food';
import { Meteor } from 'meteor/meteor';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import FoodCard from '../components/FoodCard';

/** A simple static component to render some text for the landing page. */

class VendorHomePage extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { image, itemName, description, tags } = data;
    Foods.insert({ image, itemName, description, tags }, this.insertCallback);
  }

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

            <AutoForm ref={(ref) => {
              this.formRef = ref;
            }} schema={FoodSchema} onSubmit={this.submit}>

              <Segment>
                <TextField name='itemName' placeholder='Menu Item'/>
                <TextField name='description' placeholder='Tell us more about this item...'/>
                <TextField name='image' placeholder='Give us an image...'/>
                <TextField name='tags' placeholder='Add a tag...'/>
                <SubmitField value='Add Item'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>

          <Grid.Row centered={true}>
            {this.props.foods.map((vendor) =>
                <FoodCard
                    key={vendor._id}
                    image={vendor.image}
                    itemName={vendor.itemName}
                    vendorName={vendor.vendorName}
                    description={vendor.description}
                    numLikes={vendor.numLikes}
                    tags={vendor.tags}
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
    foods: Foods.find({}, { sort: { numLikes: -1 } }).fetch(),
    ready: subscription.ready(),
  };
})(VendorHomePage);
