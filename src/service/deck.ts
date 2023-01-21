import { Request, Response } from 'express';
import { prisma } from '../config/database';
import * as teste from '../service/teste';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import deckRepositories from '../repositories/deck';

export async function getCard() {
    return await deckRepositories.getCard()
}
export async function getAdicionar(token:any) {
    return await deckRepositories.getAdicionar(token);
}
async function adicionar(body:any,id:number) {
        for(let i=0;i<body.length;i++){
            await deckRepositories.criarDeck(body[i].poder,body[i].vida,body[i].nome,body[i].foto,id,body[i].id);
        }
}
export async function BuscarSeuDeck(token:any) {
    const usuario= await deckRepositories.BuscarUsuario(token);
    return await deckRepositories.BuscarSeuDeck(usuario[0].id);
}
export default {
    getCard,
    getAdicionar,
    adicionar,
    BuscarSeuDeck
};
  