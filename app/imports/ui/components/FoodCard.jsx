import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon, Label } from 'semantic-ui-react';

class FoodCard extends React.Component {

  render() {
    const heartStyle = { color: '#be1e2d' };
    const cardStyle = { margin: '3em' };
    const tagColor = {backgroundColor: "#f15a29"};
    return (
        <Card style={cardStyle}>
          <Image src={this.props.image} />
          <Card.Content>
            <Card.Header>{this.props.itemName}</Card.Header>
            <Card.Meta>{this.props.vendorName}</Card.Meta>
            <Card.Content description={this.props.description}/>
          </Card.Content>
          <Card.Content extra>
            <span className='right floated'>
              <Icon name={'heart'} style={heartStyle} />
              {this.props.numLikes} Likes
            </span>
          </Card.Content>
          <Card.Content extra>
            {this.props.tags.map((foodTag) =>
                <Label as='a' key={foodTag} tag style={tagColor}>{foodTag}</Label>
            )}
          </Card.Content>
        </Card>
    );
  }
}

FoodCard.propTypes = {
  image: PropTypes.string,
  itemName: PropTypes.string,
  vendorName: PropTypes.string,
  description: PropTypes.string,
  numLikes: PropTypes.number,
  tags: PropTypes.array,
};

export default FoodCard;
