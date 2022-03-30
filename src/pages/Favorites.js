import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
    const { favorites, totalFavorites } = useContext( FavoritesContext );
    return (
        <section>
            <h1>
                My Favorites
            </h1>
            { totalFavorites === 0 ? 'No Favorites added yet!' : <MeetupList list={favorites} />}
            {}
        </section>
    )
}

export default FavoritesPage;
