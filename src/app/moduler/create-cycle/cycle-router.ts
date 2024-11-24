import express from 'express';
import { cycle } from './cycle-controler';

const router = express.Router();

// all operation router select here for cycle model
router.post('/', cycle.createCycle); // create cycle
router.get('/', cycle.getAllProduct); // get all cycles
router.get('/:productId', cycle.getCycleById); // get specfic id cycle
router.put('/:productId', cycle.updateCyclebyId); // update cycle
router.delete('/:productId', cycle.deleteCycleById); // delete cycle
export const cycleRouter = {
  router,
};
