"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const apollo_server_errors_1 = require("apollo-server-errors");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendMail = (_, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { mailMiddleware } = context;
    const { input } = args;
    mailMiddleware({ from: input.from, to: input.to });
    const transporter = nodemailer_1.default.createTransport({
        service: "hotmail",
        auth: {
            user: input.from,
            pass: process.env.hotmailPassword,
        }
    });
    transporter.sendMail(args.input, (err, info) => {
        if (err)
            throw new apollo_server_errors_1.ApolloError(err.message);
        console.log(info.accepted);
        console.log(info.response);
    });
    return {
        from: input.from,
        to: input.to,
        subject: input.subject,
        text: input.text,
    };
});
exports.sendMail = sendMail;
