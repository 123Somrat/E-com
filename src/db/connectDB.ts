/* eslint-disable no-undef */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let connectionString = process.env.DB_CONNECTION_STRING as string;
connectionString = connectionString.replace(
  '<username>',
  process.env.DB_USERNAME as string,
);
connectionString = connectionString.replace(
  '<password>',
  process.env.DB_PASSWORD as string,
);
connectionString = `${connectionString}/${process.env.DB_NAME}?${process.env.DB_QUERYSTRING}`;

const connectWithDB = async () => {
  await mongoose.connect(connectionString);
};
export default connectWithDB;
