"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cycleServicesFun = void 0;
const cycle_model_1 = require("./cycle-model");
// cycle create services function
const createCycleServicesFun = (cycle) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cycle_model_1.CycleModel.create(cycle);
    return result;
});
// get all cycle service function
const getAllProductServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cycle_model_1.CycleModel.find();
    return result;
});
// get specfice cycle get into id function
const getCycleByIdServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cycle_model_1.CycleModel.findById({ _id: id });
    return result;
});
// update details cycle function
const cycleDetailsUpdate = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const datas = {
        $set: Object.assign({}, updateData),
    };
    const updateDatasbyId = yield cycle_model_1.CycleModel.findByIdAndUpdate({ _id: id }, datas, {
        new: true,
    });
    return updateDatasbyId;
});
// delete cycle function
const deleteCycle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletecyclesByid = yield cycle_model_1.CycleModel.deleteOne({ _id: id });
    return deletecyclesByid;
});
exports.cycleServicesFun = {
    createCycleServicesFun,
    getAllProductServices,
    getCycleByIdServices,
    cycleDetailsUpdate,
    deleteCycle,
};
