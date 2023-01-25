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
exports.varificar = void 0;
const database_1 = require("../config/database");
function varificar(credenciais, usuario, ids, vit, vitn) {
    return __awaiter(this, void 0, void 0, function* () {
        // ataque do jogador
        console.log('pq?');
        for (let i = 0; i < credenciais.golpe.length; i++) {
            console.log('for');
            //console.log('oi')
            const vida = yield database_1.prisma.inimigo.findMany({ where: { id: credenciais.golpe[i].inimigoId } });
            const py = yield database_1.prisma.deck.findMany({ where: { id: credenciais.golpe[i].loteId } });
            //console.log(credenciais.golpe[i])
            const random = Math.floor(Math.random() * ids.length);
            //console.log(ids[random])
            if (credenciais.golpe[i].loteId === 0) {
            }
            else if (py[0].poder >= 0 && credenciais.golpe[i].inimigoId !== 0) {
                //console.log('nao cura')
                // console.log('..............................................................................................................................................')
                yield database_1.prisma.inimigo.update({
                    where: {
                        id: credenciais.golpe[i].inimigoId
                    },
                    data: {
                        vida: vida[0].vida - py[0].poder
                    }
                });
            }
            else if (py[0].poder < 0) {
                const vida2 = yield database_1.prisma.deck.findMany({ where: { id: ids[random] } });
                console.log('cura');
                console.log('..............................................................................................................................................');
                // console.log(vida2[0].vida- py[0].poder)
                //console.log(vida2[0].vida)
                //console.log(vida2[0].nome)
                //console.log( ids[random])
                yield database_1.prisma.deck.update({
                    where: {
                        id: ids[random]
                    },
                    data: {
                        vida: vida2[0].vida - py[0].poder
                    }
                });
                for (let j = 0; j < credenciais.golpe.length; j++) {
                    if (ids[random] === credenciais.golpe[j].loteId) {
                        console.log(':?');
                        credenciais.golpe[j].placarDeCura = credenciais.golpe[j].placarDeCura - py[0].poder;
                    }
                }
            }
        }
        let vidacurada = [];
        //respota
        for (let t = 0; t < credenciais.golpe.length; t++) {
            vidacurada.push(credenciais.golpe[t].placarDeCura);
        }
        for (let i = 0; i < credenciais.golpe.length; i++) {
            //console.log('for delete')
            if (credenciais.golpe[i].inimigoId !== 0) {
                //console.log('oi')
                const vida = yield database_1.prisma.inimigo.findMany({ where: { id: credenciais.golpe[i].inimigoId } });
                if (vida[0].vida <= 0) {
                    //console.log('deletado')
                    yield database_1.prisma.inimigo.delete({
                        where: {
                            id: vida[0].id,
                        },
                    });
                }
            }
        }
        console.log(':?5');
        const inimigos = yield database_1.prisma.inimigos.findMany();
        const vidas = yield database_1.prisma.inimigo.findMany({ where: { idUsuario: usuario.id } });
        const vidasInimigos = yield database_1.prisma.inimigo.findMany({ where: { idUsuario: usuario.id, fase: usuario.fase } });
        console.log(':?5');
        if (vidasInimigos.length === 0) {
            yield database_1.prisma.usuario.update({
                where: {
                    id: usuario.id
                },
                data: {
                    fase: (usuario.fase + 1)
                }
            });
            yield database_1.prisma.ouro.update({
                where: {
                    id: usuario.ouro[0].id
                },
                data: {
                    ouro: (usuario.ouro[0].ouro + 50)
                }
            });
        }
        console.log(':?6');
        if (vidas.length === 0) {
            console.log(':?7');
            yield database_1.prisma.vitorias.update({
                where: {
                    id: vit
                },
                data: {
                    vitorias: (vitn + 1)
                }
            });
            const rank = yield database_1.prisma.ranking.findMany({});
            const nota = yield database_1.prisma.vitorias.findMany({
                where: {
                    usuarioId: usuario.id
                }
            });
            rank[0].ranking;
            if (nota[0].vitorias > rank[0].ranking) {
                yield database_1.prisma.ranking.update({
                    where: {
                        id: rank[0].id
                    },
                    data: {
                        ranking: nota[0].vitorias,
                        usuarioId: nota[0].id,
                        nome: usuario.nome,
                        foto: usuario.foto
                    }
                });
            }
            for (let i = 0; i < inimigos.length; i++) {
                yield database_1.prisma.inimigo.create({ data: {
                        idUsuario: usuario.id,
                        poder: inimigos[i].poder,
                        vida: inimigos[i].vida,
                        foto: inimigos[i].foto,
                        idInimigos: inimigos[i].id,
                        nome: inimigos[i].nome,
                        fase: inimigos[i].fase
                    }
                });
            }
            console.log(':?8');
            yield database_1.prisma.usuario.update({
                where: {
                    id: usuario.id
                },
                data: {
                    fase: 1
                }
            });
            console.log(':?9');
        }
        console.log('return');
        return vidacurada;
    });
}
exports.varificar = varificar;
