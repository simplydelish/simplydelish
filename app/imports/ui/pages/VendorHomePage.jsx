import React from 'react';
import { Grid, Header, Form, Card, Image, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class VendorHomePage extends React.Component {
  render() {
    return (
        <div className='background'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4} style={{ marginLeft: '150px' }}>
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

              <Grid.Column width={7} style={{ marginLeft: '150px' }}>
                <Card>
                  <Card.Content>
                    <Image floated='right' size='big'
                           src='https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F10%2Fmain%2Fcl_digi_58.jpg%3Fitok%3DvariuqlX&w=1600&q=70'/>
                    <Card.Header>
                      Baby Kale, Quinoa, and Roasted Vegetable Salad
                    </Card.Header>
                    <Card.Meta>
                      En Saladas
                    </Card.Meta>
                    <Card.Description>
                      This salad is the antidote to an indulgent, holiday food
                      hangover. Crisp greens and bright parsley add much-needed
                      freshness to leftover roasted vegetables, and quinoa as a
                      grain base makes this a filling, protein-packed meal that can
                      stand alone. Throw in roasted veggies of any kind: Carrots,
                      parsnips, and winter squashes are all good fits.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Edit</Button>
                      <Button basic color='red'>Delete</Button>
                    </div>
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content>
                    <Image floated='right' size='big'
                           src='http://www.pinktaco.com/wp-content/uploads/2016/09/img_6059-2048x1365.jpg'/>
                    <Card.Header>
                      Crazy Taco
                    </Card.Header>
                    <Card.Meta>
                      En Saladas
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
        </div>
    );
  }
}

export default VendorHomePage;
