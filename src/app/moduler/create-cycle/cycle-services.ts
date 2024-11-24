import { CreateCycle } from './cycle-interface';
import { CycleModel } from './cycle-model';

// cycle create services function
const createCycleServicesFun = async (cycle: CreateCycle) => {
  const result = await CycleModel.create(cycle);
  return result;
};

// get all cycle service function
const getAllProductServices = async () => {
  const result = await CycleModel.find();
  return result;
};

// get specfice cycle get into id function
const getCycleByIdServices = async (id: string) => {
  const result = await CycleModel.findById({ _id: id });
  return result;
};

// update details cycle function
const cycleDetailsUpdate = async (id: string, updateData: object) => {
  const datas = {
    $set: {
      ...updateData,
    },
  };
  const updateDatasbyId = await CycleModel.findByIdAndUpdate(
    { _id: id },
    datas,
    {
      new: true,
    },
  );
  return updateDatasbyId;
};

// delete cycle function
const deleteCycle = async (id: string) => {
  const deletecyclesByid = await CycleModel.deleteOne({ _id: id });
  return deletecyclesByid;
};
export const cycleServicesFun = {
  createCycleServicesFun,
  getAllProductServices,
  getCycleByIdServices,
  cycleDetailsUpdate,
  deleteCycle,
};
