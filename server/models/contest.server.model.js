import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  contestName: String,
  contestDesc: String
});
export default mongoose.model('Contest', Schema);