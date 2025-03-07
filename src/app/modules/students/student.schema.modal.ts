import { Schema, model, connect } from 'mongoose';
import { FullName, Guardian, Student } from './student.interface';
import validator from 'validator';

const phoneNumberValidator = (value: string) => validator.isMobilePhone(value, 'any', { strictMode: false });

const dateValidator = (value: string) => validator.isDate(value, { format: 'YYYY-MM-DD', strictMode: true });

const studentNameSchema = new Schema<FullName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is Required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid, it should contain only alphabetic characters',
    },
  },
  middleName: { 
    type: String,
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid, it should contain only alphabetic characters',
    },
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is Required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid, it should contain only alphabetic characters',
    },
  },
});

const studentGuardianSchema = new Schema<Guardian>({
  fatherName: { 
    type: String, 
    required: [true, 'Father\'s Name is required'], 
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid, it should contain only alphabetic characters',
    },
  },
  fatherOccupation: { 
    type: String, 
    required: [true, 'Father\'s Occupation is required'], 
    trim: true,
  },
  motherName: { 
    type: String, 
    required: [true, 'Mother\'s Name is required'], 
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid, it should contain only alphabetic characters',
    },
  },
  motherOccupation: { 
    type: String, 
    required: [true, 'Mother\'s Occupation is required'], 
    trim: true,
  },
});

const studentSchema = new Schema<Student>({
  id: { 
    type: String, 
    required: [true, 'Student ID is required'], 
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlphanumeric(value),
      message: '{VALUE} is not valid, it should contain only alphanumeric characters',
    },
  },
  name: {
    type: studentNameSchema,
    required: true,
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email address',
    },
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid, it must be either male or female',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { 
    type: String, 
    required: [true, 'Date of Birth is required'],
    validate: {
      validator: dateValidator,
      message: '{VALUE} is not a valid date. Please use the format YYYY-MM-DD',
    },
  },
  contactNo: { 
    type: String, 
    required: [true, 'Contact Number is required'],
    validate: {
      validator: phoneNumberValidator,
      message: '{VALUE} is not a valid phone number',
    },
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
      message: '{VALUE} is not valid. Choose from A+, A-, AB+, AB-, B+, B-, O+, O-',
    },
    required: [true, 'Blood Group is required'],
  },
  presentAddress: { 
    type: String, 
    required: [true, 'Present Address is required'], 
    trim: true,
    validate: {
      validator: (value: string) => value.length > 0,
      message: 'Present Address cannot be empty',
    },
  },
  guardian: {
    type: studentGuardianSchema,
    required: [true, 'Guardian details are required'],
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
