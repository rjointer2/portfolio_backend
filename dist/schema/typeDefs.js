"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `

    type Mail {
        from: String!
        to: String!
        subject: String!
        text: String!
    }

    input MailInput {
        from: String!
        to: String!
        subject: String!
        text: String!
    }

    type Query {
        mail: [Mail]
    }

    type Mutation {
        sendMail( input: MailInput ): Mail
    }

`;
exports.default = typeDefs;
