import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  contestName: String,
  contestDesc: String,
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  entrant: String,
  coordinates: String
});
export default mongoose.model('Contest', Schema);