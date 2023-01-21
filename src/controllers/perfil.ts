import { Request, Response } from 'express';
//import { prisma } from '../config/database';
import * as teste from '../service/teste';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import perfilService from '../service/perfil';

export async function perfil(req: Request, res: Response) { 
    const body = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
      try{
        const perfil =await perfilService.perfil(token);
        res.status(201).send(perfil);
      }catch(error){
          console.log( '???')
          res.status(500).send(error)
      } 
}
export async function MudarFoto(req: Request, res: Response) { 
    const body = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
      try{
        const perfil =await perfilService.mudarfoto(token,body.foto);
        res.status(201)//.send(perfil);
      }catch(error){
          console.log( '???')
          res.status(500).send(error)
      } 
}