
import { gql } from 'apollo-server-express';

const typeDefs = gql`

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

export default typeDefs;