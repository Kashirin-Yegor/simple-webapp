import { User } from '../models/user';

export const updateUserBalance = async (userId: number, amount: number) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User not found');
    }

    const newBalance = user.balance + amount;
    if (newBalance < 0) {
        throw new Error('Insufficient balance');
    }

    user.balance = newBalance;
    await user.save();

    return user;
};
