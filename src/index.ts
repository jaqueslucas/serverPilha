import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import Arquivo from './controllers/Arquivo';
import Pilha from './controllers/Pilha';
import { rotaPop, rotaPush } from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());

app.post('/pilha/push/:nome', rotaPush);

app.delete('/pilha/pop', rotaPop);
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
