import { body } from 'express-validator';

export const validateUpdateBalance = [
    body('userId').isInt().withMessage('User ID must be an integer'),
    body('amount').isInt().withMessage('Amount must be an integer'),
];