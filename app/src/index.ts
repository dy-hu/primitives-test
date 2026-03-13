import express, { Request, Response } from 'express';

const app = express();
// HACK this needs to be refactored
const port: number = "not a number"; // type error

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from triggers-app!' });
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export { app };
