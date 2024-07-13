import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db';

export class User extends Model {
    public id!: number;
    public balance!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10000,
        },
    },
    {
        sequelize,
        tableName: 'users',
    }
);
