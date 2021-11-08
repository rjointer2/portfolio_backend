"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailMiddleware_1 = __importDefault(require("./mailMiddleware"));
const middleware = {
    mailMiddleware: mailMiddleware_1.default,
};
exports.default = middleware;
