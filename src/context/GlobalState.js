import React, {createContext, useEffect, useState} from "react";

// initial state. parse the local storage,
// if we can't, assign an empty array to the initial state
const initialState = JSON.parse(localStorage.getItem('favorites')) ?? []

// create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [favorites, setFavorites] = useState(initialState)

    // when favorites state changes, persist it to the localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);

    // returns a boolean indicating if the house is a favorite
    const isHouseOnFavorites = house => !!favorites.find(element => element.id === house.id)

    const handleClickOnFavorite = house => {
        if (isHouseOnFavorites(house)) {
            // if house is on favorites, remove it
            setFavorites(favorites.filter(favorite => favorite.id !== house.id))
        } else {
            // if house isn't on favorites, add it
            setFavorites([...favorites, house])
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                favorites,
                handleClickOnFavorite,
                isHouseOnFavorites
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}