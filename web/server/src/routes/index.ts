import { Router } from 'express';


import ListRouter from './ListRoutes';

const router = Router();

router.use('/list', ListRouter);

router.route('/').get((_, res) => {
  res.status(200).send('Rodando');
});

export default router;