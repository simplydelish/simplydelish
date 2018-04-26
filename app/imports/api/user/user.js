import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Users = new Mongo.Collection('Users');

/** Create a schema to constrain the structure of documents associated with this collection. */
const UserSchema = new SimpleSchema({
  image: { type: String, optional: true },
  email: { type: String, optional: true },
  firstName: { type: String, optional: true },
  lastName: { type: String, optional: true },
  bio: { type: String, optional: true },
  instagram: { type: String, optional: true },
  twitter: { type: String, optional: true },
  facebook: { type: String, optional: true },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Users.attachSchema(UserSchema);

/** Make the collection and schema available to other code. */
export { Users, UserSchema };
