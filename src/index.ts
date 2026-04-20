import express, { Express, Request, Response} from 'express'
import rateLimit from 'express-rate-limit';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs'
import path from 'node:path'
import cors from 'cors'
import 'dotenv/config';


const app: Express = express();

app.use(cors());
app.use(express.json());
app.set('trust proxy', true);

const PORT = process.env.PORT || 3000;

// Load reasons from JSON
const reasons = JSON.parse(readFileSync(`${path.dirname(fileURLToPath(import.meta.url))}/assets/reasons.json`, 'utf-8'));

// Rate limiter: 120 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120,
  keyGenerator: (req: Request): string => {
    const ip = req.headers['cf-connecting-ip'] || req.ip;
    const client = Array.isArray(ip) ? ip[0] : ip;
    return client as string;
  },
  message: {
    error: "Limite de requisições atingido, tente novamente mais tarde. (120 reqs/min/IP)"
  }
});

app.use(limiter);

// Random rejection reason endpoint
app.get('/no', ({}: Request, res: Response) => {
  const reason: { reason: string } = {
    reason: reasons[Math.floor(Math.random() * reasons.length)]
  };

  res.json(reason);
});

// Start server
app.listen(PORT, () => {
  console.log(`No-as-a-Service rodando na porta ${PORT}`);
});


