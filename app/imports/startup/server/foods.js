import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Foods } from '../../api/food/food.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.itemName} to foods collection`);
  Foods.insert(data);
}

/** Initialize the collection if empty. */
if (Foods.find().count() === 0) {
  if (Meteor.settings.defaultFoods) {
    console.log('Creating default foods.');
    Meteor.settings.defaultFoods.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Foods', function publish() {
  return Foods.find();
});

