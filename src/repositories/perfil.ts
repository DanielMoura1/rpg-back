import { prisma } from '../config/database';
async function perfil(token:any) {
    return await prisma.usuario.findMany({ 
        where: {
          token: token
        }
    })
}
async function mudarfoto(id:any,foto:any) {
    return await prisma.usuario.update({
        where: {
          id
        },
        data: {
            foto
        }
      })
}
export default {
    perfil,
    mudarfoto
};