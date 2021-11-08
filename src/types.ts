
export type Mail = {
    from: string
    to: string
    subject: string
    text: string
}

export type Middleware = {
    mailMiddleware: ({ from, to } : { from: string, to: string }) => { 

    }
}