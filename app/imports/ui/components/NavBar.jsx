import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Icon } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px', background: "#f15a29"};
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Header inverted as='h1'>Simply Delish</Header>
          </Menu.Item>

          <Menu.Item as={NavLink} activeClassName="active" exact to="/toppicks" key='toppicks'><Icon name='star' />Top Picks</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="active" exact to="/vendors" key='list'><Icon name='map pin' />Vendors</Menu.Item>


          <Menu.Item position="right">
            {this.props.currentUser && !Roles.userIsInRole(Meteor.userId(), 'vendor') && !Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item position="right" as={NavLink} activeClassName="active" exact to="/userprofile" key='userprofile'><Icon name='user circle' />User Profile</Menu.Item>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
                <Menu.Item as={NavLink} activeClassName="active" exact to="/vendorhomepage" key='vendorhomepage'><Icon name='home' />Vendor Home</Menu.Item>
            ) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Menu.Item as={NavLink} activeClassName="active" exact to="/addvendor" key='addvendor'><Icon name='plus' />Add Vendor</Menu.Item>
            ) : ''}
            {this.props.currentUser === '' ? (
                <Dropdown text="Login" pointing="top right">
                  <Dropdown.Menu>
                    <Dropdown.Item text="Sign In" as={NavLink} exact to="/signin"/>
                    <Dropdown.Item text="Sign Up" as={NavLink} exact to="/signup"/>
                  </Dropdown.Menu>
                </Dropdown>
            ) : (
                <Dropdown text={this.props.currentUser} pointing="top right">
                  <Dropdown.Menu>
                    <Dropdown.Item text="Sign Out" as={NavLink} exact to="/signout"/>
                  </Dropdown.Menu>
                </Dropdown>
            )}
          </Menu.Item>
        </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
