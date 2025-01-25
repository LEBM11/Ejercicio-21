import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const PERSISTENCIA = process.env.PERSISTENCIA || 'FileSystem';
const DB_USER = process.env.DB_USER || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_URL = process.env.DB_URL || "";
const DB_HOST = process.env.DB_HOST || "";

export default {
    PORT,
    PERSISTENCIA,
    DB_USER,
    DB_PASSWORD,
    DB_URL,
    DB_HOST
}