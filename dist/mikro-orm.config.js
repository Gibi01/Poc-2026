"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("@mikro-orm/mysql");
const migrations_1 = require("@mikro-orm/migrations");
exports.default = (0, mysql_1.defineConfig)({
    dbName: 'mikro_demo',
    user: 'root',
    password: '2004',
    host: 'localhost',
    port: 3306,
    entities: ['./dist/entities/**/*.js'],
    entitiesTs: ['./src/entities/**/*.ts'],
    extensions: [migrations_1.Migrator],
    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations',
    }
});
