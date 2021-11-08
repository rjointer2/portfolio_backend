
// modules
import { Mail, Middleware } from "../types";
import nodemailer from 'nodemailer';
import { ApolloError } from "apollo-server-errors";
import dotenv from 'dotenv';

dotenv.config();


export const sendMail = async ( 
    _: never, args: { input: Mail }, context: Middleware 
): Promise<Mail> => {

    const { mailMiddleware } = context;
    const { input } = args
    mailMiddleware({ from: input.from, to: input.to });

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: input.from,
            pass: process.env.hotmailPassword,
        }
    });

    transporter.sendMail(args.input, (err, info) => {
        if(err) throw new ApolloError(err.message);

        console.log(info.accepted);
        console.log(info.response)
    })
    

    return {
        from: input.from,
        to: input.to,
        subject: input.subject,
        text: input.text,
    }
}