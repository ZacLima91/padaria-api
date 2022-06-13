import express from 'express';
import PaesController from '../controllers/Pao.controller.js';
import verificarIdPao from '../middlewares/verificarIdPao.middleware.js';
import verificarDadosDoPao from '../middlewares/verificarDadosDoPao.middleware.js';

const paesController = new PaesController();

const route = express.Router();

route.get('/all-paes', paesController.getAllPaes);
route.get('/pao/:id', paesController.getPaesById);
route.post('/create-pao', paesController.createPao);
route.put('/update-pao/:id', paesController.updatePao);
route.delete('/delete-pao/:id', paesController.deletePao);

export default route;
