import express from 'express';
//import controller file
import * as contestController from '../controllers/contest.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
     .get(contestController.getContests)
     .post(contestController.addContest)
     .put(contestController.updateContest);
router.route('/:id')
      .get(contestController.getContest)
      .delete(contestController.deleteContest);
export default router;