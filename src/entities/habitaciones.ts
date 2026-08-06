import { defineEntity, p } from '@mikro-orm/core';

export const Habitación = defineEntity({

    name: 'Habitación',

    properties: {

        id: p.integer().primary(),

        tipo: p.string(),

        libre: p.boolean(),

    },

});