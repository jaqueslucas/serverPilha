import type { RequestHandler } from "express"; 
import express from "express";
import Arquivo from "../controllers/Arquivo";
import Pilha from "../controllers/Pilha";

const stack = new Pilha();
const arquivo = new Arquivo();
const app = express();

export const rotaPush: RequestHandler = async (req, res) => {
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
    };

export const rotaPop: RequestHandler = async (req, res) => { 
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
    };