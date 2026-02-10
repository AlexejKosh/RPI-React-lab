import Offer from '../models/offer.js'

async function getAllOffers(req, res, next) {
    try {
        const offers = await Offer.findAll();
        res.send(offers);
    } catch (error) {
        console.error('Не удалось получить список предложений:', error)
    }
}

export { getAllOffers };