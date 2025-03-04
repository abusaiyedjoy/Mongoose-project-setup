import { Schema, model, connect } from 'mongoose';

export type FullName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};

export type Student = {
  id: string;
  name: FullName;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  guardian: Guardian;
};
