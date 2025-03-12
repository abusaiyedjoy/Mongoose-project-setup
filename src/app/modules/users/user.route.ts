import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { studentValidations } from '../students/ValidationSchema';

const router = express.Router();

router.post('/create-student', validateRequest(studentValidations.createStudentValidationSchema), UserControllers.createStudent);

export const UserRoutes = router;