import React from 'react';
import { Grid, Header, Card, Image, Button, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Container>
          <Grid columns={2} centered celled='internally'>
            <Grid.Column>
              <Header as='h1'>es·tab·lish·ment</Header>
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

              <Card>
                <Card.Content>
                  <Image floated='right' size='big'
                         src='http://manoa.hawaii.edu/food/index_files/stacks_image_1956.png'/>
                  <Card.Header>
                    Sistah Truck
                  </Card.Header>
                  <Card.Meta>
                    Holmes Hall (Monday, Wednesday, Friday)
                    Center for Korean Studies (Tuesday, Thursday)
                  </Card.Meta>
                  <Card.Description>
                    Sistah Truck serves Korean-inspired local cuisine. Daily
                    menu plate lunches include loco moco, chicken katsu, and
                    Korean-style shoyu chicken. They also serve grab-and-go
                    dishes like bibimbap, gyoza and kimchi bowls. Vegetarian
                    options are available.
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
                         src='http://yoensalada.es/wp-content/uploads/2017/06/LogoPortada-1024x682-990x420.jpg'/>
                  <Card.Header>
                    Le Crêpe Café
                  </Card.Header>
                  <Card.Meta>
                    Richardson School of Law
                  </Card.Meta>
                  <Card.Description>
                    Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast, snack, main course, or dessert - close your eyes and you're in Paris!
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

            <Grid.Column>
              <Header as='h1'textAlign="center">pro·files</Header>
              <Card centered celled='internally'>
                <Card.Content>
                  <Image floated='right' size='big'
                         src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png'/>
                  <Card.Header>
                    Will Smith
                  </Card.Header>
                  <Card.Meta>
                    Salads, Tacos, Smoothies
                  </Card.Meta>
                  <Card.Description>
                    In west Philadelphia born and raised.
                    On the playground was where I spent most of my days.
                    Chillin' out maxin' relaxin' all cool.
                    And all shootin some b-ball outside of the school.
                    When a couple of guys who were up to no good.
                    Started making trouble in my neighborhood.
                    I got in one little fight and my mom got scared.
                    She said 'You're movin' with your auntie and uncle in Manoa.'
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Edit</Button>
                    <Button basic color='red'>Delete</Button>
                  </div>
                </Card.Content>
              </Card>

              <Card centered celled='internally'>
                <Card.Content>
                  <Image floated='right' size='big'
                         src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg'/>
                  <Card.Header>
                    Thor Odinson
                  </Card.Header>
                  <Card.Meta>
                    Perhaps your steak or beef. Or the turkish birds. Or the
                    popping tarts. Bacon is good as well. Shawarma. No, cake.
                    And french bread. Your cobblers are delicious as well.
                    Blueberry cobbler.

                  </Card.Meta>
                  <Card.Description>
                    I am... Thor! Son of Odin, God of Thunder.
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

          </Grid>
        </Container>
    );
  }
}

export default Landing;
