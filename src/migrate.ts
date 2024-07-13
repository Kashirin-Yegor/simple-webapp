import { sequelize } from './utils/db';
import { Umzug, SequelizeStorage } from 'umzug';
import { createDatabaseIfNotExists } from './utils/createDatabase';

const runMigrations = async () => {
    try {
        await createDatabaseIfNotExists();

        const umzug = new Umzug({
            migrations: {
                // Используем sequelize-cli миграции
                glob: 'migrations/*.{js,ts}',
            },
            context: sequelize.getQueryInterface(),
            storage: new SequelizeStorage({ sequelize }),
            logger: console,
        });

        await umzug.up();
        console.log('Migrations up to date');
    } catch (error) {
        console.error('Failed to run migrations:', error);
        process.exit(1);
    }
};

runMigrations();
