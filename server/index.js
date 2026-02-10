import express from 'express';
import * as dotenv from 'dotenv';
import sequelize from './config/database.js';
import Offer from './models/offer.js';
import Review from './models/review.js';
import User from './models/user.js';
import router from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
