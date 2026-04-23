import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from triggers-app!' });
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why did the developer go broke? Because he used up all his cache.",
  "How many programmers does it take to change a light bulb? None — that's a hardware problem.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
];

app.get('/joke', (_req: Request, res: Response) => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export { app };
