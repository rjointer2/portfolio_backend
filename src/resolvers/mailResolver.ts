import { Mail, Middleware } from "../types";

export const sendMail = async ( 
    _: never, args: { input: Mail }, context: Middleware 
): Promise<Mail> => {

    const { mailMiddleware } = context
    mailMiddleware(args.input)

    return {
        from: "",
        to: "",
        subject: "",
        text: "",
    }
}