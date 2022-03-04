import css from '../../styles/Card.module.css';

function Card({children}) {

    return (
        <div className={css.card}>{children}</div>
    )

}

export default Card;