"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cycleRouter = void 0;
const express_1 = __importDefault(require("express"));
const cycle_controler_1 = require("./cycle-controler");
const router = express_1.default.Router();
// all operation router select here for cycle model
router.post('/', cycle_controler_1.cycle.createCycle); // create cycle
router.get('/', cycle_controler_1.cycle.getAllProduct); // get all cycles
router.get('/:productId', cycle_controler_1.cycle.getCycleById); // get specfic id cycle
router.put('/:productId', cycle_controler_1.cycle.updateCyclebyId); // update cycle
router.delete('/:productId', cycle_controler_1.cycle.deleteCycleById); // delete cycle
exports.cycleRouter = {
    router,
};
