import { defineConfig } from '@mikro-orm/mysql';
import { Migrator } from '@mikro-orm/migrations';

export default defineConfig({

    dbName: 'mikro_demo',

    user: 'root',

    password: '2004',

    host: 'localhost',

    port: 3306,

    entities: ['./dist/entities/**/*.js'],

    entitiesTs: ['./src/entities/**/*.ts'],

    extensions: [Migrator],

    migrations: {

        path: './dist/migrations',

        pathTs: './src/migrations',

    }

});