import {Prisma, List} from '@prisma/client';
import prisma from '../database';

class ListRepository {
    async create(data: Prisma.ListCreateInput): Promise<List> {
        const list = await prisma.list.create({data})
        return list
    }

    async update(id: number, data: Prisma.ListUpdateInput): Promise<List> {
        const list = await prisma.list.update({where: {id}, data})
        return list
    }
}


export default new ListRepository();