import express, { Request, Response } from 'express';

// Inicializa o app Express
const app = express();

// Porta onde o servidor irá rodar
const PORT = process.env.PORT || 3000;

// Middleware para permitir parsing de JSON
app.use(express.json());

// Rota simples de exemplo
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Rota de exemplo que retorna dados em JSON
app.get('/api/data', (req: Request, res: Response) => {
  res.json({
    message: 'Bem-vindo ao servidor Express com TypeScript!',
    data: [1, 2, 3, 4, 5]
  });
});

export { app as server };