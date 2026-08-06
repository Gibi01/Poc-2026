import { defineEntity, p } from '@mikro-orm/core';

export const Reserva = defineEntity({

    name: 'Reserva',

    properties: {

        id: p.integer().primary(),

        usuarioId: p.integer(),

        habitacionId: p.integer(),

        fechaIngreso: p.datetime(),

    },

});