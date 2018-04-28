import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header } from 'semantic-ui-react';
import SignedOutHeader from '../components/SignedOutHeader';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div>
          <SignedOutHeader/>
        </div>
    );
  }
}
