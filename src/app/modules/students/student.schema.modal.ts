import { Schema, model, connect } from 'mongoose';
import { FullName, Guardian, Student } from './student.interface';

const studentNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentGuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: studentNameSchema,
  email: { type: String, required: true },
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  contactNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  guardian: studentGuardianSchema,
});

export const StudentModal = model<Student>('Student', studentSchema);
