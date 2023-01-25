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
exports.rank = void 0;
const ranking_1 = __importDefault(require("../service/ranking"));
function rank(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ranking = yield ranking_1.default.rank();
            res.status(201).send(ranking);
        }
        catch (error) {
            console.log('???');
            res.status(500).send(error);
        }
    });
}
exports.rank = rank;
