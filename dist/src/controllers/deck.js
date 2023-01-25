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
exports.BuscarSeuDeck = exports.comprar = exports.adicionar = exports.getLoja = exports.selecao = void 0;
const deck_1 = __importDefault(require("../service/deck"));
function selecao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const cards = yield deck_1.default.getCard();
        res.send(cards);
    });
}
exports.selecao = selecao;
function getLoja(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        const cards = yield deck_1.default.getloja(token);
        res.send(cards);
    });
}
exports.getLoja = getLoja;
function adicionar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const { authorization } = req.headers;
            const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
            const usuario = yield deck_1.default.getAdicionar(token);
            yield deck_1.default.adicionar(body, usuario[0].id);
            res.status(201).send(token);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.adicionar = adicionar;
function comprar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const { authorization } = req.headers;
            const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
            const usuario = yield deck_1.default.getAdicionar(token);
            yield deck_1.default.comprar(body, usuario[0].id, usuario[0].ouro[0].ouro, usuario[0].ouro[0].id, body[0].id);
            res.status(201).send(token);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.comprar = comprar;
function BuscarSeuDeck(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const credenciais = req.body;
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        try {
            const deck = yield deck_1.default.BuscarSeuDeck(token);
            res.send(deck);
        }
        catch (error) {
            res.status(500).send(error);
        }
    });
}
exports.BuscarSeuDeck = BuscarSeuDeck;
