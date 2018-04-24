import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image } from 'semantic-ui-react';
import { Segment, Icon , Card} from 'semantic-ui-react';

export default class Food extends React.Component {

  render() {
    const foodBack = {  boxShadow: "none",
      border: "none", background: "transparent"};
    const starC = {color: "#f7941d"};
    const heartC = {color: "#be1e2d"};
    const cardStyle = {width: "290px", maxWidth: "100%"};
    const paddingFix = {padding: "5em"};

    return (
        <Segment textAlign="center" style={foodBack}>
          <Card.Group style={paddingFix}>
            <Card centered style={cardStyle}>
              <Image src='/images/sistah.png' />
              <Card.Content>
                <Card.Header>
                  The Sistah
                </Card.Header>
                <Card.Meta>
        <span className='date'>
          Monday thru Friday: 10:00am -  2:00pm  Holmes Hall
        </span>
                </Card.Meta>
                <Card.Description>
                  Serves Korean-inspired local cuisine.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span className='left floated'>
                <Icon name='heart' style={heartC}/>
                22 Likes
              </span>
              </Card.Content>
            </Card>
            <Card centered style={cardStyle}>
              <Image src='/images/lecrepe.png' />
              <Card.Content>
                <Card.Header>
                  Le Crêpe Cafe
                </Card.Header>
                <Card.Meta>
        <span className='date'>
Monday thru Friday: 8:00am -  2:00pm  Law Plaza
        </span>
                </Card.Meta>
                <Card.Description>
                  Makes traditional French crêpes, cooked to order in front of customers.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span className='left floated'>
                <Icon name='heart' style={heartC}/>
                19 Likes
              </span>
              </Card.Content>
            </Card>
            <Card centered style={cardStyle}>
              <Image src='/images/banan.png' />
              <Card.Content>
                <Card.Header>
                  Banan
                </Card.Header>
                <Card.Meta>
        <span className='date'>
          <div>Monday thru Thursday: 10:00am - 8:00pm</div>
          <div>Friday & Saturday: 10:00am - 10:00pm</div>
        </span>
                </Card.Meta>
                <Card.Description>
                  Turn locally grown bananas into a dairy-free soft-serve!

                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span className='left floated'>
                <Icon name='heart' style={heartC}/>
                19 Likes
              </span>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
    );
  }
}