import { defineEntity, p } from '@mikro-orm/core';
import { Reserva } from './reserva';

export const Usuario = defineEntity({

    name: 'Usuario',

    properties: {

        id: p.integer().primary(),

        nombre: p.string(),

        apellido: p.string(),

        edad: p.integer(),

        reservas: () =>
            p.oneToMany(Reserva).mappedBy('usuario'),

  },

});