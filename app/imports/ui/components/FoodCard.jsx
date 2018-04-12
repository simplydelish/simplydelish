import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react';

class FoodCard extends React.Component {

  render() {
    const starStyle = { color: '#f7941d' };
    const heartStyle = { color: '#be1e2d' };
    const cardStyle = { margin: '3em' };
    return (
        <Card style={cardStyle}>
          <Image src={this.props.image} />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>{this.props.hours}</Card.Meta>
            <Card.Content description={this.props.description}/>
          </Card.Content>
          <Card.Content extra>
            <span className='right floated'>
              <Icon name={'star'} style={starStyle} />
              {this.props.numReviews} Reviews
            </span>
            <span className='right floated'>
              <Icon name={'heart'} style={heartStyle} />
              {this.props.numLikes} Likes
            </span>
          </Card.Content>
        </Card>
    );
  }
}

FoodCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
  numReviews: PropTypes.number,
  numLikes: PropTypes.number,
};

export default FoodCard;
