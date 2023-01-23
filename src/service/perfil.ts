import deckRepositories from '../repositories/perfil';
export async function perfil(token:any) {
    const perfil= await deckRepositories.perfil(token)
    let res=[{foto:perfil[0].foto,nome:perfil[0].nome,fase:perfil[0].fase,vitorias:perfil[0].vitorias[0].vitorias,ouro:perfil[0].ouro[0].ouro}]
    return res
}
export async function mudarfoto(token:any,foto:any) {
    const id= await deckRepositories.perfil(token)
    return await deckRepositories.mudarfoto(id[0].id,foto)
}
export default {
    perfil,
    mudarfoto
};
  