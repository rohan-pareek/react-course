import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import css from '../../styles/Navigation.module.css';

function Navigation() {
    const { totalFavorites } = useContext( FavoritesContext );
    return (
        <header className={css.header}>
            <div className={css.logo}>React Meetups</div>
            <nav className={css.nav}>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My Favorites <span className={css.badge}>{totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
