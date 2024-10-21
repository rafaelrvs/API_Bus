import express from 'express';
import routes from './routes/index.js'; // Importando as rotas

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Usando as rotas
routes(app);

export default app;
