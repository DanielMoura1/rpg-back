import { prisma } from '../config/database';

async function getCard() {
    return await prisma.card.findMany()
}
async function getAdicionar(token:any) {
    return await prisma.usuario.findMany({ 
        where: {
          token: token
        }
    })
}
async function criarDeck(poder:number,vida:number,nome:string,foto:string,idUser:number,id:number) {
     await prisma.deck.create({ data:{
        poder:poder,
        vida:vida,
        maxVida:vida,
        nome:nome,
        foto:foto,
        idUser:idUser,
        idCard:id
    }});
}
async function BuscarUsuario(token:any) {
    return  await prisma.usuario.findMany({ 
        where: {
          token: token
        }
      })
}
async function BuscarSeuDeck(id:number) {
    return  await prisma.deck.findMany({ 
        where: {
            idUser: id 
          }
    })
}
export default {
    getCard,
    getAdicionar,
    criarDeck,
    BuscarUsuario,
    BuscarSeuDeck
};
