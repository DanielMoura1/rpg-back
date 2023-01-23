import { Router } from "express";
import {
    inimigo,
    postInimigos,
    } from '../controllers/teste';
import {
    cadastro,
    login,
    } from '../controllers/cadastro';
import {
    BuscarSeuDeck,
    adicionar,
    selecao,
    getLoja
    } from '../controllers/deck';
import {
    perfil,
    MudarFoto
    } from '../controllers/perfil';
import {
    rank
    } from '../controllers/ranking';
import {  cadastroSchema} from '../schemas/schemaCadatro';

import { validateSchemaMiddleware } from './../middlewares/validarSchema';
const authRouter = Router();

authRouter.get('/selecao',  selecao);
authRouter.get('/criarUser',  BuscarSeuDeck);
authRouter.get('/inimigos', inimigo);
authRouter.post('/cadastro',validateSchemaMiddleware(cadastroSchema), cadastro);
authRouter.post('/inimigos', postInimigos);
authRouter.post('/login', login);
authRouter.post('/adicionar', adicionar);
authRouter.get('/perfil', perfil);
authRouter.put('/mudarfoto',  MudarFoto);
authRouter.get('/rank',  rank);
authRouter.get('/loja',  getLoja);
export default authRouter;

