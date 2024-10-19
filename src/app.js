import express from 'express';
import routes from './routes/index.js'; // Usando import e com .js

const app = express();

routes(app);

export default app; // Usando export default para ES Module
