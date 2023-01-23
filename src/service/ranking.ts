import rankingRepositories from '../repositories/rank';
export async function rank() {
    return await rankingRepositories.rank()
}
export default {
    rank
};
  