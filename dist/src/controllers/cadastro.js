"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.cadastro = void 0;
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const cadastro_1 = __importDefault(require("../service/cadastro"));
const foto = 'data:image/jpeg;base64,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';
function cadastro(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const { authorization } = req.headers;
        try {
            const token = (0, uuid_1.v4)();
            const email = yield cadastro_1.default.buscarEmail(body.email);
            if (email.length > 0) {
                console.log(email);
                console.log('erro');
                return res.status(500).send('email invalido');
            }
            yield cadastro_1.default.cadastro(body.email, body.senha, body.nome, token);
            res.send(token);
        }
        catch (error) {
            console.log('???');
            res.status(500).send(error);
        }
    });
}
exports.cadastro = cadastro;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const token = (0, uuid_1.v4)();
            const usuario = yield cadastro_1.default.loginGetUsuario(body.email);
            const senha = bcrypt_1.default.compareSync(body.senha, usuario[0].senha);
            if (usuario.length === 0) {
                return res.status(500).send('email ou senha nao existe');
            }
            else if (!senha) {
                return res.status(500).send('email ou senha nao existe');
            }
            yield cadastro_1.default.login(usuario[0].id, token);
            res.send(token);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.login = login;