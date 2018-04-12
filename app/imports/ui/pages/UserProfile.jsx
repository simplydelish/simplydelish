import React from 'react';
import { Card, Image, Container, Button, Form, Grid, Dropdown, Input } from 'semantic-ui-react';

const foodtasteoptions = [
  { key: 'taste option 1', text: 'taste option 1', value: 'taste option 1' },
  { key: 'taste option 2', text: 'taste option 2', value: 'taste option 2' },
  { key: 'taste option 3', text: 'taste option 3', value: 'taste option 3' },
];

/** A simple static component to render some text for the landing page. */
export default class UserProfile extends React.Component {
  render() {
    return (
        <Container>
          <Grid columns={2} centered celled='internally'>
            <Grid.Row>
              <Grid.Column width={5}>
                <Card>
                  <Image src="images/testprofilepicture.png"/>
                  <Card.Content>
                    <Card.Header>
                      Username
                    </Card.Header>
                    <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
                    </Card.Meta>
                    <Card.Description>
                      john@foo.com
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Button floated={'right'} size={'mini'}>
                        Change Password
                      </Button>
                      <Button floated={'left'} size={'mini'}>
                        Change Email
                      </Button>
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name'/>
                    <Form.Input fluid label='Last name' placeholder='Last name'/>
                  </Form.Group>

                  <Form.Group widths='equal'>
                    <Form.TextArea label='Bio' placeholder='Tell us more about you...'/>
                  </Form.Group>
                </Form>

                <Dropdown placeholder='Food Taste' fluid multiple selection options={foodtasteoptions}/>

                <br></br>
                <Input fluid
                       icon='instagram'
                       iconPosition='left'
                       placeholder='Link your Instagram!'
                />
                <Input fluid
                       icon='twitter'
                       iconPosition='left'
                       placeholder='Link your Twitter!'
                />
                <Input fluid
                       icon='facebook square'
                       iconPosition='left'
                       placeholder='Link your Facebook!'
                />

                <br></br>
                <Button fluid>Submit</Button>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

