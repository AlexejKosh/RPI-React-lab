import type { OffersList } from '../../types/offer';
import { CitiesCard } from '../cities-card/cities-card';

type CitiesCardListProps = {
    offersList: OffersList[];
    onHover?: (id: string) => void;
    containerClass?: string;
    cardRootClass?: string;
};

function CitiesCardList({ offersList, onHover, containerClass, cardRootClass }: CitiesCardListProps) {
    const container = containerClass ?? 'cities__places-list places__list tabs__content';
    return(
        <div className={container}>
            {Array.from(offersList, (item) =>
                <CitiesCard
                    key={ item.id }
                    id={ item.id }
                    title={ item.title }
                    type={ item.type }
                    price={ item.price }
                    previewImage={ item.previewImage }
                    isPremium={ item.isPremium }
                    rating={ item.rating }
                    onHover={onHover}
                    rootClass={cardRootClass}
                    isFavorite={item.isFavorite}
                />
            )}
        </div>
    );
}

export { CitiesCardList };