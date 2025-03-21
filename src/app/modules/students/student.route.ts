import express from 'express';
import { StudentControllers } from './student.controller';
import { updateStudentValidationSchema } from './ValidationSchema';
import validateRequest from '../../middleware/validateRequest';
const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
