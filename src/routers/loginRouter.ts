import { Router } from "express";
import {
    createProvas,
    inimigo,
    postTeste,
    cadastro,
    login,
    adicionar,
    selecao
    } from '../controllers/teste';
import {  cadastroSchema} from '../schemas/schemaCadatro';
import { validateSchemaMiddleware } from './../middlewares/validarSchema';
const authRouter = Router();

authRouter.get('/selecao',  selecao);
authRouter.get('/criarUser',  createProvas);
authRouter.get('/inimigos', inimigo);
authRouter.post('/cadastro',validateSchemaMiddleware(cadastroSchema), cadastro);
authRouter.post('/inimigos', postTeste);
authRouter.post('/login', login);
authRouter.post('/adicionar', adicionar);

export default authRouter;

