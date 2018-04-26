import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.firstName} ${data.lastName} to users collection`);
  Users.insert(data);
}

/** Initialize the collection if empty. */
if (Users.find().count() === 0) {
  if (Meteor.settings.defaultFoods) {
    console.log('Creating default users.');
    Meteor.settings.defaultUsers.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Users', function publish() {
  return Users.find();
});

