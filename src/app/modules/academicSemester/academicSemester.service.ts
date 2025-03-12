import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Envalid semester code');
  }
  const result = AcademicSemesterModel.create(payload);
  return result;
};

const getAllSemesterDataIntoDb = async () => {
  const result = AcademicSemesterModel.find();
  return result;
};

const getSingleSemesterDataIntoDb = async (id: string) => {
  const result = AcademicSemesterModel.findOne({ id });
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDb,
  getAllSemesterDataIntoDb,
  getSingleSemesterDataIntoDb,
  updateAcademicSemesterIntoDB,
};
