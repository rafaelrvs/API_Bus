import ChatController from '../controller/ChatController.js';
import express from 'express';

const routes = express.Router();

routes.post("/analyze", ChatController.enviaMensagem);

export default routes;
