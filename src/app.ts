import { MikroORM } from '@mikro-orm/mysql';
import config from './mikro-orm.config';
import { Usuario } from './entities/usuario';
import { Habitación } from './entities/habitaciones';
import { Reserva } from './entities/reserva';

async function main() {

  // Inicializa MikroORM
  const orm = await MikroORM.init(config);

  // Crea un EntityManager independiente
  const em = orm.em.fork();

  console.log('Conectado a la base de datos');


  // Crear una habitación pero vacía
  const habitacion = em.create(Habitación, {
    tipo: 'Doble',
    libre: true,
  });

  // Crear un usuario
  const usuario = em.create(Usuario, {
    nombre: 'Light',
    apellido: 'Yagami',
    edad: 30,
  });

  await em.persistAndFlush(usuario);

  console.log('Usuario creado:', usuario);


//transacción para realizar una reserva de habitación para un usuario
await orm.em.transactional(async (em) => {

  const usuarioReserva = await em.findOneOrFail(Usuario, {
    id: usuario.id,
  });

  const habitacionReserva = await em.findOneOrFail(Habitación, {
    id: habitacion.id,
  });

  if (habitacionReserva.libre === false) {
    throw new Error("La habitación ya está ocupada.");
  }

  habitacionReserva.libre = false;

  const reserva = em.create(Reserva, {
    usuario: usuario,
    habitacion: habitacion,
    fechaIngreso: new Date(),
  });

  em.persist(reserva);
  em.flush();
});

  
  


 await orm.close(true);

}

main().catch(console.error);