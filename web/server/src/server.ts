import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis do .env
import express from 'express';
import cors from 'cors';
import listRouter from './routes/ListRoutes';

const app = express();
const PORT = process.env.SERVER_PORT || 3003;


app.use(cors());
app.use(express.json());
app.use('/list', listRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
