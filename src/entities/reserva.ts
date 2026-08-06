import { defineEntity, p } from '@mikro-orm/core';
import { Usuario } from './usuario';
import { Habitación } from './habitaciones';

export const Reserva = defineEntity({

    name: 'Reserva',

    properties: {

        id: p.integer().primary(),

        usuario: () => p.manyToOne(Usuario),

        habitacion: () => p.manyToOne(Habitación),

        fechaIngreso: p.datetime(),

    },

});