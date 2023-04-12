/***  Imports  ***/
import mongoose from 'mongoose';

/***  DECLARATION AND INITIALIZATION ***/

const Schema = mongoose.Schema;

/** Function to Create the Schema  **/
const studentSchem = new Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'student' },
  },
  { timestamps: true }
);

/***  Exports ***/

export default mongoose.model('User', studentSchem, 'users');
