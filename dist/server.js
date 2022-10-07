"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
exports.default = index_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
index_1.default.listen(process.env.PORT, () => console.log(`
  Server running on port ${process.env.PORT}.
`));
