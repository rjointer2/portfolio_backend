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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_express_1 = require("apollo-server-express");
const databaseConfigs_1 = __importDefault(require("./configs/databaseConfigs"));
// port 
const _PORT = process.env.PORT || 1234;
// Type Defs
const typeDefs_1 = __importDefault(require("./schema/typeDefs"));
// Resolvers
const rootResolver_1 = __importDefault(require("./schema/rootResolver"));
// Middleware
const rootMiddleware_1 = __importDefault(require("./middleware/rootMiddleware"));
// init new apollo server
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs_1.default, resolvers: rootResolver_1.default, context: rootMiddleware_1.default
});
// connection to the DB
mongoose_1.default.connect(databaseConfigs_1.default || `http://localhost:${_PORT}`, () => __awaiter(void 0, void 0, void 0, function* () {
    const server = (0, express_1.default)();
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app: server });
    server.listen(_PORT, () => console.log(`🚀 Server is running with no issue. click here to open ->  http://localhost:${_PORT}/graphql`));
}));
