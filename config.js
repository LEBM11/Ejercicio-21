import dotennv from 'dotenv'

dotennv.config()

const PORT = process.env.PORT || 3000
const PERSISTENCIA = process.env.PERSISTENCIA || 'file'
const DB_USER = process.env.DB_USER || ""
const DB_PASSWORD = process.env.DB_PASSWORD || ""
const DB_URL = process.env.DB_URL || ""

export default {
    PORT,
    PERSISTENCIA,
    DB_USER,
    DB_PASSWORD,
    DB_URL
}