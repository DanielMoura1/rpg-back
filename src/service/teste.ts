import { prisma } from '../config/database';

export async function varificar(credenciais:any,usuario:any,cartas:any,ids:any) {
  
    console.log('pq?')
    //console.log(credenciais.length)
    for(let i=0;i<credenciais.golpe.length;i++){
        console.log('for')
   
          console.log('oi')
          const vida= await prisma.inimigo.findMany({ where: {id:  credenciais.golpe[i].inimigoId } })
          const py= await prisma.deck.findMany({ where: {id:  credenciais.golpe[i].loteId } })
          console.log(credenciais.golpe[i])
          const random = Math.floor(Math.random()*ids.length)
          console.log(ids[random])
          if(credenciais.golpe[i].loteId ===0){

          }else if(py[0].poder>=0 &&  credenciais.golpe[i].inimigoId !==0){
            console.log('nao cura')
            console.log('..............................................................................................................................................')
          await prisma.inimigo.update({
              where: {
              id: credenciais.golpe[i].inimigoId
              },
              data: {
                vida:vida[0].vida- py[0].poder
              }
            })
        }else if(py[0].poder<0 ){
          const vida2= await prisma.deck.findMany({ where: {id:  ids[random] } })
          console.log('cura')
          console.log('..............................................................................................................................................')
          console.log(vida2[0].vida- py[0].poder)
          console.log(vida2[0].vida)
          console.log(vida2[0].nome)
          console.log( ids[random])
          await prisma.deck.update({
            where: {
            id: ids[random]
            },
            data: {
              vida:vida2[0].vida- py[0].poder
            }
          })
        
      }
  }
  for(let i=0;i<credenciais.golpe.length;i++){
    console.log('for delete')
    if(credenciais.golpe[i].inimigoId!==0){
      console.log('oi')
      const vida= await prisma.inimigo.findMany({ where: {id:  credenciais.golpe[i].inimigoId } })
     if(vida[0].vida<=0){
      console.log('deletado')
      await prisma.inimigo.delete({
        where: {
          id: vida[0].id,
        },
      })
     }
     

  }
}
const inimigos= await prisma.inimigos.findMany()
const vidas= await prisma.inimigo.findMany({ where: {idUsuario: usuario.id  } })
const vidasInimigos= await prisma.inimigo.findMany({ where: {idUsuario: usuario.id, fase:usuario.fase  } })
if(vidasInimigos.length===0){
  await prisma.usuario.update({
    where: {
    id: usuario.id
    },
    data: {
      fase:(usuario.fase+1)
    }
  })
  }
if(vidas.length===0){
for(let i =0;i< inimigos.length;i++){
  await prisma.inimigo.create({ data:
    {
      idUsuario:usuario.id,
      poder:inimigos[i].poder,
      vida:inimigos[i].vida,
      foto:inimigos[i].foto,
      idInimigos:inimigos[i].id,
      nome:inimigos[i].nome,
      fase:inimigos[i].fase
    }
  });
}

await prisma.usuario.update({
  where: {
  id: usuario.id
  },
  data: {
    fase:1
  }
})

}
}