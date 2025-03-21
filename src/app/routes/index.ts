import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { StudentRoutes } from '../modules/students/student.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/acadamicSemester',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
