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
exports.BuscarSeuDeck = exports.getAdicionar = exports.getloja = exports.getCard = void 0;
const deck_1 = __importDefault(require("../repositories/deck"));
function getCard() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield deck_1.default.getCard();
    });
}
exports.getCard = getCard;
function getloja(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield deck_1.default.getLoja(token);
    });
}
exports.getloja = getloja;
function getAdicionar(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield deck_1.default.getAdicionar(token);
    });
}
exports.getAdicionar = getAdicionar;
function adicionar(body, id) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < body.length; i++) {
            yield deck_1.default.criarDeck(body[i].poder, body[i].vida, body[i].nome, body[i].foto, id, body[i].id);
        }
    });
}
function comprar(body, id, dinheiro, idOuro, idCard) {
    return __awaiter(this, void 0, void 0, function* () {
        const ouro = yield deck_1.default.buscarOuro(idCard);
        if (dinheiro >= ouro[0].ouroCard[0].ouro) {
            yield deck_1.default.criarDeck(body[0].poder, body[0].vida, body[0].nome, body[0].foto, id, body[0].id);
            yield deck_1.default.ouro(idOuro, dinheiro, ouro[0].ouroCard[0].ouro);
        }
        else {
            console.log('else');
        }
    });
}
function BuscarSeuDeck(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield deck_1.default.BuscarUsuario(token);
        return yield deck_1.default.BuscarSeuDeck(usuario[0].id);
    });
}
exports.BuscarSeuDeck = BuscarSeuDeck;
exports.default = {
    getCard,
    getAdicionar,
    adicionar,
    BuscarSeuDeck,
    getloja,
    comprar
};
