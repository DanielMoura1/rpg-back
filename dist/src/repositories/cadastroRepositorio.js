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
function email(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.usuario.findMany({ where: { email: email } });
    });
}
function criarUsuario(token, senha, email, foto, nome) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.usuario.create({ data: {
                token: token,
                senha: senha,
                email: email,
                foto: foto,
                nome: nome,
                fase: 1,
            } });
    });
}
function getUsuario(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.usuario.findMany({ where: { email: email } });
    });
}
function inimigos() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.inimigos.findMany();
    });
}
function CriarInimigo(id, poder, vida, foto, inimigosId, nome, fase) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.inimigo.create({ data: {
                idUsuario: id,
                poder: poder,
                vida: vida,
                foto: foto,
                idInimigos: inimigosId,
                nome: nome,
                fase: fase
            } });
    });
}
function CriarVitoria(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.vitorias.create({ data: {
                vitorias: 0,
                usuarioId: id
            } });
    });
}
function CriarOuro(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.ouro.create({ data: {
                ouro: 0,
                usuarioId: id
            } });
    });
}
function usuarioUpdate(id, token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield database_1.prisma.usuario.update({
            where: {
                id: id
            },
            data: {
                token: token
            }
        });
    });
}
exports.default = {
    email,
    criarUsuario,
    getUsuario,
    inimigos,
    CriarInimigo,
    usuarioUpdate,
    CriarVitoria,
    CriarOuro
};
