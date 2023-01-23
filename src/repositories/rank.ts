import { prisma } from '../config/database';
async function rank() {
    return await prisma.ranking.findMany({})
}
export default {
    rank
};