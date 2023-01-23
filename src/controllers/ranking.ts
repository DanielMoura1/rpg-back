import { Request, Response } from 'express';
//import { prisma } from '../config/database';
import * as teste from '../service/teste';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import rankingService from '../service/ranking';

export async function rank(req: Request, res: Response) { 
      try{
        const ranking =await rankingService.rank()
        res.status(201).send(ranking);
      }catch(error){
          console.log( '???')
          res.status(500).send(error)
      } 
}