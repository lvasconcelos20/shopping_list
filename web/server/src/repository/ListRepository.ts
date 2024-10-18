import {Prisma, List} from '@prisma/client';
import prisma from '../database';

class ListRepository {
    async create(data: Prisma.ListCreateInput): Promise<List> {
        const list = await prisma.list.create({data})
        return list
    }
    async findById(id: number): Promise<List | null> {
        const list = await prisma.list.findUnique({ where: { id } });
        return list;
      }
      async findAll(): Promise<List[]> {
        return await prisma.list.findMany(); // Retorna todos os itens da lista
      }

    async update(id: number, data: Prisma.ListUpdateInput): Promise<List> {
        const list = await prisma.list.update({where: {id}, data})
        return list
    }

    async delete(id: number): Promise<List> {
        const list = await prisma.list.delete({ where: { id } });
        return list;
      }
    
}


export default new ListRepository();