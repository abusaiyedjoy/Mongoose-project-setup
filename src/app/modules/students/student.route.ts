import express from 'express';
import { StudentController } from './student.controller';
import { StudentModal } from './student.schema.modal';

const router = express.Router();

// will call controller
router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getStudents);

router.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoute = router;
