import express from 'express';
import { updateBalance } from './controllers/userController';

const app = express();
app.use(express.json());

app.put('/update-balance', updateBalance);

export default app;
