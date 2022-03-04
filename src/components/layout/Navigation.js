import { Link } from "react-router-dom";
import css from '../../styles/Navigation.module.css';

function Navigation() {
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
                        <Link to="/favorites">My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
