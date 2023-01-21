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
    selecao
    } from '../controllers/deck';
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

export default authRouter;

