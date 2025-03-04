import { Student } from './student.interface';
import { StudentModal } from './student.schema.modal';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModal.create(student);
  return result;
};

const getAllStudentDataFromDB = async () => {
  const result = await StudentModal.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModal.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentDataFromDB,
  getSingleStudentFromDB,
};
