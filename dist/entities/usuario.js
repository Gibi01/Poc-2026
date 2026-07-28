"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const core_1 = require("@mikro-orm/core");
exports.Usuario = (0, core_1.defineEntity)({
    name: 'Usuario',
    properties: {
        id: core_1.p.integer().primary(),
        nombre: core_1.p.string(),
        apellido: core_1.p.string(),
    },
});
