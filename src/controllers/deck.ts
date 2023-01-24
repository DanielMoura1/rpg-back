import { Request, Response } from 'express';
import { prisma } from '../config/database';
import * as teste from '../service/teste';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import deckService from '../service/deck';

export async function selecao(req: Request, res: Response) {
    const cards= await deckService.getCard()
    res.send(cards);
}
export async function getLoja(req: Request, res: Response) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  const cards= await deckService.getloja(token)
  res.send(cards);
}
export async function adicionar(req: Request, res: Response) { 
    const body = req.body;
    try{
        const { authorization } = req.headers;
        const token = authorization?.replace('Bearer ', '');
        const usuario= await deckService.getAdicionar(token)
        await deckService.adicionar(body,usuario[0].id)
        res.status(201).send(token);
    }catch(error){
      res.status(500).send(error)
    } 
}
export async function comprar(req: Request, res: Response) { 
    const body = req.body;
    try{
        const { authorization } = req.headers;
        const token = authorization?.replace('Bearer ', '');
        const usuario= await deckService.getAdicionar(token)
        await deckService.comprar(body,usuario[0].id,usuario[0].ouro[0].ouro,usuario[0].ouro[0].id,body[0].id)
        res.status(201).send(token);
    }catch(error){
      res.status(500).send(error)
    } 
}
export async function BuscarSeuDeck(req: Request, res: Response) { 
    const credenciais = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
      try{
          const deck= await deckService.BuscarSeuDeck(token);
          res.send(deck);
      }catch(error){
          res.status(500).send(error)
      } 
}