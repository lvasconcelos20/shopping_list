import { Request, Response, NextFunction } from 'express';
import { ListRepository } from '../repository';
import { List, UpdateList } from '../DTOs/List';  // DTOs de validação

class ListController {
  // Criação de um novo item na lista
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const listData = List.parse(req.body);
      const newList = await ListRepository.create(listData); 

      res.status(201).json(newList); 
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message }); 
      } else {
        next(error);
      }
    }
  }
  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const lists = await ListRepository.findAll(); // Método para buscar todos os itens
      res.status(200).json(lists);
    } catch (error) {
      next(error);
    }
  }

  // Leitura de um item na lista
  async read(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { listId } = req.params;
      const listItem = await ListRepository.findById(Number(listId)); // Supondo que tenha esse método no repositório

      if (!listItem) {
        res.status(404).json({ message: 'Item não encontrado' });
      } else {
        res.status(200).json(listItem); 
      }
    } catch (error) {
      next(error); 
    }
  }

  // Atualização de um item na lista
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { listId } = req.params;
      const updateData = UpdateList.parse(req.body); 
      const updatedList = await ListRepository.update(Number(listId), updateData); 

      res.status(200).json(updatedList);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message }); 
      } else {
        next(error);
      }
    }
  }

  // Deletar um item
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { listId } = req.params;
      await ListRepository.delete(Number(listId));

      res.status(200).json({ message: 'Item deletado com sucesso' }); 
    } catch (error) {
      next(error); // Passa o erro para o próximo middleware
    }
  }
}

export default new ListController();
