import { Request, Response } from 'express';
import { updateUserBalance } from '../services/userService';
import { validationResult } from 'express-validator';

export const updateBalance = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, amount } = req.body;

    try {
        const updatedUser = await updateUserBalance(userId, amount);
        return res.json(updatedUser);
    } catch (error:unknown) {
        return res.status(400).json({ error: (error as Error).message });
    }
};
