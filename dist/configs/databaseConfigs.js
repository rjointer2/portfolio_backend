"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_configs = `
    mongodb+srv://
    ${process.env.UN}:
    ${process.env.PW}
    @cluster0.zb3af.mongodb.net/
    ${process.env.DB}
    ?retryWrites=true&w=majority
`;
exports.default = database_configs;
