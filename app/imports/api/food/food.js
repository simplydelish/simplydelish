import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Foods = new Mongo.Collection('Foods');

/** Create a schema to constrain the structure of documents associated with this collection. */
const FoodSchema = new SimpleSchema({
  image: String,
  itemName: String,
  vendorName: String,
  description: String,
  numReviews: Number,
  numLikes: Number,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Foods.attachSchema(FoodSchema);

/** Make the collection and schema available to other code. */
export { Foods, FoodSchema };