import express from 'express';
import MascarasController from '../controllers/mascarasController.js';

const routes = express.Router();

routes.get('/mascaras', MascarasController.listAllMascaras);
routes.post('/mascaras', MascarasController.createNewMasc)

export default routes;