import bcrypt from 'bcrypt';
import ApiError from '../error/ApiError.js';
import User from '../models/user.js';

export const registration = async (req, res, next) => {
    try {
        const { email, password, userType, username } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const avatarImage = `/static/${req.file.filename}`;
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({
            email,
            userType,
            username,
            avatar: avatarImage,
            password: hashPassword
        });
        res.json({
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                avatarUrl: user.avatar,
                isPro: user.userType === 'pro'
            }
        });
    } catch (error) {
        next(ApiError.internal('Ошибка регистрации'));
    }
};