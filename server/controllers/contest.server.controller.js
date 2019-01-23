import mongoose from 'mongoose';
//import models
import Contest from '../models/contest.server.model';
export const getContests = (req,res) => {
  // for the specific contest details - whose co-ordinates matched with the current user's co-ordinates
  var qury = {};
  var cord = req.query["lat"] ? req.query["lat"] : req.query["lng"]; 
  // get Contest by entrant co-ordinates
  if(cord){
    // search either by Lat or Long
    qury = {$where : 'this.coordinates.indexOf("' + cord + '") != -1'};
  }
  // if not co-ordinates then normal flow
  Contest.find(qury).exec((err,contests) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Contests fetched successfully',contests});
  });
}
export const addContest = (req,res) => {
  const newContest = new Contest(req.body);
  newContest.save((err,contest) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Contest added successfully',contest});
  })
}
export const updateContest = (req,res) => {
  Contest.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,contest) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(contest);
    return res.json({'success':true,'message':'Updated successfully',contest});
  })
}
export const getContest = (req,res) => {
  Contest.find({_id:req.params.id}).exec((err,contest) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(contest.length){
      return res.json({'success':true,'message':'Contest fetched by id successfully',contest});
    }
    else{
      return res.json({'success':false,'message':'Contest with the given id not found'});
    }
  })
}
export const deleteContest = (req,res) => {
  Contest.findByIdAndRemove(req.params.id, (err,contest) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':contest.contestName+' deleted successfully'});
  })
}