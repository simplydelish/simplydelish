import React from 'react';
import { Grid, Header, Form, Card, Image, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class VendorHomePage extends React.Component {
  render() {
    return (
        <Grid>
          <Grid.Row>
            <Grid.Column width={5} style={{ marginLeft: '30px' }}>
              <Header as="h2" textAlign="center">Add Item</Header>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input label='Menu Item' placeholder='Menu Item'/>
                </Form.Group>
                <Form.TextArea label='Description' placeholder='Tell us more about this item...'/>
                <Form.Button>Add Item</Form.Button>
              </Form>
            </Grid.Column>
            <Grid.Column width = {4}>
            </Grid.Column>
            <Grid.Column width={6}>
              <Card>
                <Card.Content>
                  <Image floated='right' size='big'
                         src='http://www.pinktaco.com/wp-content/uploads/2016/09/img_6059-2048x1365.jpg'/>
                  <Card.Header>
                    Crazy Taco
                  </Card.Header>
                  <Card.Meta>
                    Timmy's Taco
                  </Card.Meta>
                  <Card.Description>
                    Everything you love about a taco and <strong>More</strong>
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

          </Grid.Row>
        </Grid>
    );
  }
}

export default VendorHomePage;
