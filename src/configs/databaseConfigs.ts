
const database_configs = `
    mongodb+srv://
    ${process.env.UN}:
    ${process.env.PW}
    @cluster0.zb3af.mongodb.net/
    ${process.env.DB}
    ?retryWrites=true&w=majority
`;

export default database_configs;