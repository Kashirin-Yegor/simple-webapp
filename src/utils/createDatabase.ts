import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const adminSequelize = new Sequelize({
    database: 'postgres',
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
});

export const createDatabaseIfNotExists = async () => {
    const databaseName = process.env.DB_NAME;

    try {
        await adminSequelize.query(`CREATE DATABASE "${databaseName}"`);
        console.log(`Database ${databaseName} created`);
    } catch (error) {
        if (error instanceof Error && error.message.includes('already exists')) {
            console.log(`Database ${databaseName} already exists`);
        } else {
            throw error;
        }
    }
};
