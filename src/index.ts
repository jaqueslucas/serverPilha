import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import Arquivo from './controllers/Arquivo';
import Pilha from './controllers/Pilha';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const stack = new Pilha();
const arquivo = new Arquivo();

app.use(express.json());

app.post('/pilha/push/:nome', async (req: Request, res: Response) => {
  const { nome } = req.params;
  stack.push(nome);

  try {
    await arquivo.escreverArquivo(stack.getStack());
    res.json({ stackContents: stack.getStack() });
  } catch (error) {
    res.status(500).send('Erro ao escrever no arquivo');
  }
});

app.delete('/pilha/pop', async (req: Request, res: Response) => {
  if (stack.isEmpty()) {
    res.status(404).send('Pilha vazia');
  } else {
    const removedName = stack.pop();

    try {
      await arquivo.escreverArquivo(stack.getStack());
      res.json({ removedName });
    } catch (error) {
      res.status(500).send('Erro ao escrever no arquivo');
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
