import { prisma } from '../config/database';

async function getCard() {
    return await prisma.card.findMany()
}
async function getLoja(token:any) {
    const usuario= await prisma.usuario.findMany({
        where :{
            token
        }
    })
    const res =[]
    const deck =await prisma.deck.findMany({
        where :{
            idUser:usuario[0].id
        }
    })
    const card= await prisma.card.findMany({
        include:{
            ouroCard:true
        }
    })
    
    for(let i=0;i<card.length;i++){
        let ok='ok'
        for(let j=0;j<deck.length;j++){
            if(deck[j].nome===card[i].nome){
                ok='nao'
            }
        }
        if(ok==='ok'){
            res.push(card[i])
        }
    }
    return res
}
async function getAdicionar(token:any) {
    return await prisma.usuario.findMany({ 
        where: {
          token: token
        },include:{
            ouro:true
        }
    })
}
async function ouro(id:any,dinheiro:any,d:any) {
    return await prisma.ouro.update({ 
        where: {
          id
        },data :{
            ouro :dinheiro-d
        }
    })
}
async function buscarOuro(id:any) {
    return await prisma.card.findMany({ 
        where: {
          id
        },include:{
            ouroCard:true
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
    BuscarSeuDeck,
    getLoja,
    buscarOuro,
    ouro
};
