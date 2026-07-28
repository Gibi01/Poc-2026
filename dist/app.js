"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("@mikro-orm/mysql");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
const usuario_1 = require("./entities/usuario");
async function main() {
    // Inicializa MikroORM
    const orm = await mysql_1.MikroORM.init(mikro_orm_config_1.default);
    // Crea un EntityManager independiente
    const em = orm.em.fork();
    console.log('Conectado a la base de datos');
    // ==========================
    // Crear un usuario
    // ==========================
    const usuario = em.create(usuario_1.Usuario, {
        nombre: 'Facundo',
        apellido: 'Gobbo',
    });
    await em.persistAndFlush(usuario);
    console.log('Usuario creado:', usuario);
    // ==========================
    // Buscar un usuario
    // ==========================
    const encontrado = await em.findOneOrFail(usuario_1.Usuario, { id: usuario.id });
    console.log('Usuario encontrado:', encontrado);
    // ==========================
    // Actualizar un usuario
    // ==========================
    encontrado.apellido = 'Perez';
    await em.flush();
    console.log('Usuario actualizado');
    // ==========================
    // Eliminar un usuario
    // ==========================
    await em.removeAndFlush(encontrado);
    console.log('Usuario eliminado');
    await orm.close(true);
}
main().catch(console.error);
