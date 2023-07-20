//This is just dependencies
import dotenv from 'dotenv';

//Classes
import Server from './Models/server';

//initialization of env config
dotenv.config();

//Initialization of server
const server = new Server();
server.listen();