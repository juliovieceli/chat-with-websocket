import 'reflect-metadata'
import express from 'express'
import path from 'path'
import { createServer } from 'http';
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();

app.use(cors());
const server = createServer(app);


mongoose.connect(`mongodb://192.168.15.38:27017/rocketsocket`)

app.use(express.static(path.join(__dirname, '..', 'public')))
const io = new Server(server)

app.get('/', (request, response) => {
   response.json({
      message: 'Hello WS'
   });
});

export { server, io }