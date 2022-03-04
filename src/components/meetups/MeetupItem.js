import css from '../../styles/MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem({ title, image, address, description }) {

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
                    <button>Add to Favorites</button>
                </div>
            </Card>
        </li>
    )

}

export default MeetupItem;