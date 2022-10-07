"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastroSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.cadastroSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    senha: joi_1.default.string().required(),
    nome: joi_1.default.string().required()
});