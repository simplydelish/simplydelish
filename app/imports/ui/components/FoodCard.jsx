import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon, Label, Button } from 'semantic-ui-react';
import { Foods, FoodSchema } from '/imports/api/food/food';
import { withTracker } from 'meteor/react-meteor-data';

class FoodCard extends React.Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    const item = this.props.itemName;
    const food = Foods.findOne({ itemName: item });
    Foods.remove({ _id: food._id });
  }

  render() {
    const heartStyle = { color: '#be1e2d' };
    const cardStyle = { margin: '3em' };
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
                <Label as='a' key={foodTag} tag>{foodTag}</Label>
            )}
          </Card.Content>
          <Card.Content extra>
            <Button basic onClick={this.delete}>Delete</Button>
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

export default withTracker(() => {
  const subscription = Meteor.subscribe('Foods');
  return {
    foods: Foods.find({}, {sort: {numLikes: -1}}).fetch(),
    ready: subscription.ready(),
  };
})(FoodCard);
