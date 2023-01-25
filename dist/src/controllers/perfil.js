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
exports.MudarFoto = exports.perfil = void 0;
const perfil_1 = __importDefault(require("../service/perfil"));
function perfil(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        try {
            const perfil = yield perfil_1.default.perfil(token);
            res.status(201).send(perfil);
        }
        catch (error) {
            console.log('???');
            res.status(500).send(error);
        }
    });
}
exports.perfil = perfil;
function MudarFoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        try {
            const perfil = yield perfil_1.default.mudarfoto(token, body.foto);
            res.status(201); //.send(perfil);
        }
        catch (error) {
            console.log('???');
            res.status(500).send(error);
        }
    });
}
exports.MudarFoto = MudarFoto;
