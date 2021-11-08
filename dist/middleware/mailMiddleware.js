"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//modules
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const apollo_server_errors_1 = require("apollo-server-errors");
dotenv_1.default.config();
function mailMiddleware({ from, to, text, subject }) {
    const transporter = nodemailer_1.default.createTransport({
        service: "hotmail",
        auth: {
            user: from,
            pass: process.env.hotmailPassword,
        }
    });
    const options = { from, to, text, subject };
    transporter.sendMail(options, (err, info) => {
        if (err)
            throw new apollo_server_errors_1.ApolloError(err.message);
        console.log(info.accepted);
        console.log(info.response);
    });
    return {};
}
exports.default = mailMiddleware;
