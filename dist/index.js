"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//This is just dependencies
const dotenv_1 = __importDefault(require("dotenv"));
//Classes
const server_1 = __importDefault(require("./Models/server"));
//initialization of env config
dotenv_1.default.config();
//Initialization of server
const server = new server_1.default();
server.listen();
//# sourceMappingURL=index.js.map