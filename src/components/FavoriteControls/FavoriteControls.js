import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";

export const FavoriteControls = ({house}) => {
    const {isHouseOnFavorites, handleClickOnFavorite} = useContext(GlobalContext);

    return (
        <div className="innerCardControls">
                    <button className="favBtn"
                    onClick={() => handleClickOnFavorite(house)}>
                        {isHouseOnFavorites(house)
                            ? <FontAwesomeIcon icon={faHeartSolid}/> // if it is, render full heart
                            : <FontAwesomeIcon icon={faHeart}/> // if it isn't, render empty heart
                        }
                    </button>
        </div>
    )
}