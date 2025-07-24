import mongoose, { Document, Schema } from 'mongoose';
import mongooseDelete, { SoftDeleteDocument, SoftDeleteModel } from 'mongoose-delete';
import { v4 as uuidv4 } from 'uuid';

export interface IEmployee extends SoftDeleteDocument {
  email: string;
  name: string;
  dob?: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    _id: {
      type: String,
      default: uuidv4, // use UUID v4 as _id
    },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    dob: { type: Date },
  },
  { timestamps: true },
);

// Add soft delete plugin
EmployeeSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

export const EmployeeModel = mongoose.model<IEmployee, SoftDeleteModel<IEmployee>>(
  'Employee',
  EmployeeSchema,
);

export default EmployeeModel;
