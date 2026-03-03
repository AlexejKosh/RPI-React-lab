const cityCoordinates = {
    Paris: { latitude: 48.8566, longitude: 2.3522, zoom: 12 },
    Cologne: { latitude: 50.9375, longitude: 6.9603, zoom: 12 },
    Brussels: { latitude: 50.8503, longitude: 4.3517, zoom: 12 },
    Amsterdam: { latitude: 52.3676, longitude: 4.9041, zoom: 12 },
    Hamburg: { latitude: 53.5511, longitude: 9.9937, zoom: 12 },
    Dusseldorf: { latitude: 51.2277, longitude: 6.7735, zoom: 12 }
};

const getBaseUrl = () => `${process.env.HOST}:${process.env.PORT || 5000}`;

const adaptOfferToClient = (offer) => {
    const baseUrl = getBaseUrl();
    const cityLocation = cityCoordinates[offer.city];
    let previewImage = offer.previewImage;
    if (previewImage && !previewImage.startsWith('http')) {
        previewImage = `${baseUrl}${previewImage.startsWith('/') ? '' :
            '/'}${previewImage}`;
    }
    return {
        id: String(offer.id),
        title: offer.title,
        type: offer.type,
        price: offer.price,
        city: {
            name: offer.city,
            location: cityLocation
        },
        location: offer.latitude && offer.longitude ? {
            latitude: offer.latitude,
            longitude: offer.longitude
        } : { latitude: 0, longitude: 0 },
        isFavorite: offer.isFavorite,
        isPremium: offer.isPremium,
        rating: parseFloat(offer.rating),
        previewImage
    };
};

const adaptFullOfferToClient = (offer, author) => {
    const baseUrl = getBaseUrl();
    const cityLocation = cityCoordinates[offer.city];

    const makeUrl = (url) => {
        if (!url) return url;
        if (url.startsWith('http')) return url;
        return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    const images = Array.isArray(offer.photos) ? offer.photos.map(makeUrl) : [];
    const previewImage = offer.previewImage ? makeUrl(offer.previewImage) : null;
    let avatarUrl = author?.avatar || null;
    if (avatarUrl && !avatarUrl.startsWith('http')) {
        avatarUrl = makeUrl(avatarUrl);
    }

    return {
        id: String(offer.id),
        title: offer.title,
        type: offer.type,
        price: offer.price,
        city: {
            name: offer.city,
            location: cityLocation
        },
        location: offer.latitude && offer.longitude ? {
            latitude: offer.latitude,
            longitude: offer.longitude,
            zoom: cityLocation ? cityLocation.zoom : 13
        } : { latitude: 0, longitude: 0, zoom: 13 },
        isFavorite: offer.isFavorite,
        isPremium: offer.isPremium,
        rating: parseFloat(offer.rating),
        description: offer.description,
        bedrooms: offer.rooms,
        goods: offer.features || [],
        host: {
            name: author?.username || '',
            avatarUrl,
            isPro: author?.userType === 'pro'
        },
        images,
        previewImage,
        guests: offer.guests
    };
};

export { adaptOfferToClient, adaptFullOfferToClient };