import { Router } from 'express';
import { ListController } from '../controllers';

const listRouter = Router();

listRouter.route('/')
  .post(ListController.create); // Rota de criação

listRouter.route('/').get(ListController.readAll); //ler todos os itens

listRouter.route('/:listId')
  .get(ListController.read) // Rota de leitura
  .patch(ListController.update) // Rota de atualização
  .delete(ListController.delete); // Rota de deletar

export default listRouter;