import cors from 'cors';
import express from 'express';

import router from './src/routers/index';

const server = express();
server.use(express.json());
server.use(cors());
server.use(router);

export default server;