import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (payload) => {},
    removeFavorite: (payload) => {},
    isItemFavorite: (payload) => {}
});

export const FavoritesContextProvider = ( props ) => {
    const [ userFavorites, setUserFavorites ] = useState([]);

    useEffect( () => {

        const localData = localStorage.getItem('favorites');

        if( localData ) {
            setUserFavorites(JSON.parse(localData));
        }

    }, [] );

    useEffect( () => {

        localStorage.setItem('favorites', JSON.stringify(userFavorites));

    }, [ userFavorites ] );

    const addFavoriteHandler = (payload) => {
        setUserFavorites(prev => [...prev, payload])
    }

    const removeFavoriteHandler = (payload) => {
        setUserFavorites(prev => [ ...prev.filter(elem => elem.id !== payload.id) ])
    }

    const isItemFavoriteHandler = (payload) => {
        return userFavorites.findIndex(elem => elem.id === payload.id) !== -1;
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isItemFavorite: isItemFavoriteHandler
    }
    return (
        <FavoritesContext.Provider value={ context }>
            { props.children }
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;
