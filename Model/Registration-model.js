import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('User', studentSchem, 'users');
