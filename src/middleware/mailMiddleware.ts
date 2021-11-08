
//modules
import dotenv from 'dotenv';
import { Mail } from "../types";
import nodemailer from 'nodemailer';
import { ApolloError } from "apollo-server-errors";

dotenv.config();


export default function mailMiddleware({ from, to, text, subject } : Mail) {

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: from,
            pass: process.env.hotmailPassword,
        }
    });

    const options = { from, to, text, subject };

    transporter.sendMail(options, (err, info) => {
        if(err) throw new ApolloError(err.message);

        console.log(info.accepted);
        console.log(info.response)
    })

    return {  }
}