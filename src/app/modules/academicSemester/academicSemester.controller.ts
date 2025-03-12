import sendResponse from '../../utils/sendResponse';
import tryCatch from '../../utils/tryCatch';
import { AcademicSemesterService } from './academicSemester.service';
import httpStatus from 'http-status';

const createAcademicSemester = tryCatch(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntoDb(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});
const getAllAcademicSemester = tryCatch(async (req, res) => {
  const result = await AcademicSemesterService.getAllSemesterDataIntoDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get All Academic Semesters successfully',
    data: result,
  });
});
const getSingleAcademicSemester = tryCatch(async (req, res) => {
  const { params } = req.params;
  const result =
    await AcademicSemesterService.getSingleSemesterDataIntoDb(params);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get A Single Academic Semesters successfully',
    data: result,
  });
});

const updateAcademicSemester = tryCatch(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
