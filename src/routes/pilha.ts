import type { RequestHandler } from "express";
import Arquivo from "../controllers/Arquivo";
import Pilha from "../controllers/Pilha";

const stack = new Pilha();
const arquivo = new Arquivo();

export const rotaPush: RequestHandler = async (req, res) => {
  const { nome } = req.params;

  stack.push(nome);

  try {
    await arquivo.escreverArquivo(stack.getStack());

    return res.status(200).json({ stackContents: stack.getStack() });
  } catch (error) {
    return res.status(500).send("Erro ao escrever no arquivo");
  }
};

export const rotaPop: RequestHandler = async (req, res) => {
  if (stack.isEmpty()) {
    return res.status(404).send("Pilha vazia");
  }

  const removedName = stack.pop();

  try {
    await arquivo.escreverArquivo(stack.getStack());

    return res.status(200).json({ removedName });
  } catch (error) {
    return res.status(500).send("Erro ao escrever no arquivo");
  }
};
