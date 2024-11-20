import express from 'express';
import chatRoutes from './chatRoutes.js'; // Adicionar .js no final
import itinerarioRoutes from './itinerarioRoutes.js'; // Adicionar .js no final


import cors from 'cors';

export default (app) => {
    app.use(
        cors({
            origin: ['https://consultaonibus.rvstechsolucoes.com.br', 'http://localhost:3000'],
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
        }),
        express.json(),
        chatRoutes,
        itinerarioRoutes
    );
};
