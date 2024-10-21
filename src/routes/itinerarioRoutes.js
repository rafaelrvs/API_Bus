import ItinerarioController from '../controller/ItinerarioController.js';
import express from 'express';

const routes = express.Router();

routes.get("/escolhaOnibus", ItinerarioController.buscaOnibus);

export default routes;
