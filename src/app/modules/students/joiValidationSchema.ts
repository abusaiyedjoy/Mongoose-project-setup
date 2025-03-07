import Joi from "joi";



const fullNameSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .message('First Name must contain only alphabetic characters'),
    middleName: Joi.string()
      .trim()
      .pattern(/^[A-Za-z]+$/)
      .message('Middle Name must contain only alphabetic characters'),
    lastName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .message('Last Name must contain only alphabetic characters'),
  });

  // Define the validation schema for Guardian
  const guardianSchema = Joi.object({
    fatherName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .message("Father's Name must contain only alphabetic characters"),
    fatherOccupation: Joi.string().trim().required(),
    motherName: Joi.string()
      .trim()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .message("Mother's Name must contain only alphabetic characters"),
    motherOccupation: Joi.string().trim().required(),
  });

  // Define the main Student schema
  const studentSchema = Joi.object({
    id: Joi.string()
      .required()
      .alphanum()
      .message('Student ID must be alphanumeric'),
    name: fullNameSchema.required(),
    email: Joi.string().email().required().message('Invalid email format'),
    gender: Joi.string()
      .valid('male', 'female')
      .required()
      .message('Gender must be either "male" or "female"'),
    dateOfBirth: Joi.string()
      .required()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .message('Date of Birth must be in the format YYYY-MM-DD'),
    contactNo: Joi.string()
      .required()
      .pattern(/^\+?[1-9]\d{1,14}$/)
      .message('Contact Number must be a valid phone number'),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-')
      .required()
      .message('Blood Group must be one of A+, A-, AB+, AB-, B+, B-, O+, O-'),
    presentAddress: Joi.string()
      .trim()
      .required()
      .min(1)
      .message('Present Address cannot be empty'),
    guardian: guardianSchema.required(),
  });


  export default studentSchema;