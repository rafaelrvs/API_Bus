import express from 'express';
import chatRoutes from './chatRoutes.js';
import cors from 'cors';

export default (app) => {
    app.use(
        cors({
            origin: 'https://consultaonibus.rvstechsolucoes.com.br',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
        }),
        express.json(),
        chatRoutes
    );
};
