import { prisma } from '../config/database';
async function email(email:string) {
    return await prisma.usuario.findMany({ where: {email:  email} });
}
async function criarUsuario(token:string,senha:string,email:string,foto:string,nome:string) {
    return  await prisma.usuario.create({ data: {
        token:token,
        senha:senha,
        email:email,
        foto:foto,
        nome:nome,
        fase:1,
      }});
}
async function getUsuario(email:string) {
    return await prisma.usuario.findMany({ where: {email:  email} })
}
async function inimigos() {
    return await  prisma.inimigos.findMany()
}
async function CriarInimigo(id:number,poder:number,vida:number,foto:string,inimigosId:number,nome:string,fase:number) {
    return  await prisma.inimigo.create({ data:{
        idUsuario:id,
        poder:poder,
        vida:vida,
        foto:foto,
        idInimigos:inimigosId,
        nome:nome,
        fase:fase
      }});
}
async function CriarVitoria(id:any) {
  return  await prisma.vitorias.create({ data:{
      vitorias:0,
      usuarioId:id
    }});
}
async function CriarOuro(id:any) {
  return  await prisma.ouro.create({ data:{
      ouro:0,
      usuarioId:id
    }});
}
async function usuarioUpdate(id:number,token:string) {
    return await prisma.usuario.update({
        where: {
          id:id
        },
        data: {
          token:token
        }
      })
}
export default {
    email,
    criarUsuario,
    getUsuario,
    inimigos,
    CriarInimigo,
    usuarioUpdate,
    CriarVitoria,
    CriarOuro
};
