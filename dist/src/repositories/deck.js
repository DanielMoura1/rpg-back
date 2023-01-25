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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
function getCard() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.card.findMany();
    });
}
function getLoja(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuario = yield database_1.prisma.usuario.findMany({
            where: {
                token
            }
        });
        const res = [];
        const deck = yield database_1.prisma.deck.findMany({
            where: {
                idUser: usuario[0].id
            }
        });
        const card = yield database_1.prisma.card.findMany({
            include: {
                ouroCard: true
            }
        });
        for (let i = 0; i < card.length; i++) {
            let ok = 'ok';
            for (let j = 0; j < deck.length; j++) {
                if (deck[j].nome === card[i].nome) {
                    ok = 'nao';
                }
            }
            if (ok === 'ok') {
                res.push(card[i]);
            }
        }
        return res;
    });
}
function getAdicionar(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.usuario.findMany({
            where: {
                token: token
            }, include: {
                ouro: true
            }
        });
    });
}
function ouro(id, dinheiro, d) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.ouro.update({
            where: {
                id
            }, data: {
                ouro: dinheiro - d
            }
        });
    });
}
function buscarOuro(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.card.findMany({
            where: {
                id
            }, include: {
                ouroCard: true
            }
        });
    });
}
function criarDeck(poder, vida, nome, foto, idUser, id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.prisma.deck.create({ data: {
                poder: poder,
                vida: vida,
                maxVida: vida,
                nome: nome,
                foto: foto,
                idUser: idUser,
                idCard: id
            } });
    });
}
function BuscarUsuario(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.usuario.findMany({
            where: {
                token: token
            }
        });
    });
}
function BuscarSeuDeck(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.deck.findMany({
            where: {
                idUser: id
            }
        });
    });
}
exports.default = {
    getCard,
    getAdicionar,
    criarDeck,
    BuscarUsuario,
    BuscarSeuDeck,
    getLoja,
    buscarOuro,
    ouro
};
