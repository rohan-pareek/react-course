import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import css from '../../styles/MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem({ title, image, address, description, id }) {

    const { addFavorite, removeFavorite, isItemFavorite } = useContext(FavoritesContext);

    const handleClick = () => {
        if( isItemFavorite( { id } ) ) {
            removeFavorite( { id } )
        } else {
            addFavorite( { title, image, address, description, id } )
        }
    }

    return (
        <li className={css.item}>
            <Card>
                <div className={css.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={css.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={css.actions}>
                    <button onClick={handleClick}>
                        { `${ isItemFavorite( { id } ) ? 'Remove from Favorite' : 'Add to Favorites' }` }
                    </button>
                </div>
            </Card>
        </li>
    )

}

export default MeetupItem;