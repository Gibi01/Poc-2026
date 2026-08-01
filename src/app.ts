import { MikroORM } from '@mikro-orm/mysql';
import config from './mikro-orm.config';
import { Usuario } from './entities/usuario';

async function main() {

  // Inicializa MikroORM
  const orm = await MikroORM.init(config);

  // Crea un EntityManager independiente
  const em = orm.em.fork();

  console.log('Conectado a la base de datos');




  // Crear un usuario

  const usuario = em.create(Usuario, {
    nombre: 'Facundo',
    apellido: 'Gobbo',
    edad: 30
  });

  await em.persistAndFlush(usuario);

  console.log('Usuario creado:', usuario);

  


  // Buscar un usuario

  const encontrado = await em.findOneOrFail(
    Usuario,
    { id: usuario.id }
  );

  console.log('Usuario encontrado:', encontrado);




  // Actualizar un usuario

  encontrado.apellido = 'Perez';

  await em.flush();

  console.log('Usuario actualizado');




  // Eliminar un usuario

 await em.removeAndFlush(encontrado);

 console.log('Usuario eliminado');

 await orm.close(true);

}

main().catch(console.error);