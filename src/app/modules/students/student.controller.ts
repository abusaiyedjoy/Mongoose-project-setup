import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call service function
    const result = await studentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentDataFromDB();
    res.status(200).json({
      success: true,
      message: 'Students is get succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student is get succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
