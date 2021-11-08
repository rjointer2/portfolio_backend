"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailResolver_1 = require("../resolvers/mailResolver");
let resolvers = {
    /* Query: {

    }, */
    Mutation: {
        sendMail: mailResolver_1.sendMail
    }
};
exports.default = resolvers;
