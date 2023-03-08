import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import Card from "../../components/HouseCard/HouseCard";
import "./Favoritos.scss"
export const Favorites = () => {
    const {favorites} = useContext(GlobalContext);

    let favoritesByCountry = {};
    favorites.forEach(house => {
        if (!favoritesByCountry[house.country]) {
            favoritesByCountry[house.country] = [house]
        } else {
            favoritesByCountry[house.country].push(house)
        }
    })

    if (!favorites.length) {
        return (
            <div className="favorites">
                <div className="header">
                    <div className="heading">
                        Favoritos
                    </div>
                </div>
            <div className="noFavorites">
                Sem favoritos
            </div>
            </div>
        )
    }

    return (
        <div className="favorites">
            <div className="header">
                <div className="heading">
                    Favoritos
                </div>
            </div>
            <div className="houseCards">
                <div className="body">
                    {Object.keys(favoritesByCountry).map((country) => {
                        return (
                            <div>
                                <div className="country">{country}</div>
                                {favoritesByCountry[country].map((f, idx) => (
                                    <Card
                                    type="favorite"
                                    key={idx}
                                    {...f}
                                    />
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}