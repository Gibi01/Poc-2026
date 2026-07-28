import { defineEntity, p } from '@mikro-orm/core';

export const Usuario = defineEntity({

    name: 'Usuario',

    properties: {

        id: p.integer().primary(),

        nombre: p.string(),

        apellido: p.string(),

        edad: p.integer(),

    },

});