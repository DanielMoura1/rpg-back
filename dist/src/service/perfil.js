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
exports.mudarfoto = exports.perfil = void 0;
const perfil_1 = __importDefault(require("../repositories/perfil"));
function perfil(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const perfil = yield perfil_1.default.perfil(token);
        let res = [{ foto: perfil[0].foto, nome: perfil[0].nome, fase: perfil[0].fase, vitorias: perfil[0].vitorias[0].vitorias, ouro: perfil[0].ouro[0].ouro }];
        return res;
    });
}
exports.perfil = perfil;
function mudarfoto(token, foto) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = yield perfil_1.default.perfil(token);
        return yield perfil_1.default.mudarfoto(id[0].id, foto);
    });
}
exports.mudarfoto = mudarfoto;
exports.default = {
    perfil,
    mudarfoto
};
