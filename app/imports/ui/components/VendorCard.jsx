import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Icon } from 'semantic-ui-react';

class VendorCard extends React.Component {

  render() {
    const cardStyle = { margin: '3em' };
    return (
        <Card style={cardStyle}>
          <Image src={this.props.image}/>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>{this.props.hours}</Card.Meta>
            <Card.Content description={this.props.description}/>
          </Card.Content>
        </Card>
    );
  }
}

VendorCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
  numReviews: PropTypes.number,
  numLikes: PropTypes.number,
};

export default VendorCard;
