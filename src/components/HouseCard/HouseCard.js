import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import {Link} from "react-router-dom";
import {FavoriteControls} from "../FavoriteControls/FavoriteControls";
import "./HouseCard.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default function Card({id, city, country, host_type, price, rating, featured_photo, type, time}) {

    const houseInfo = {id, city, country, host_type, price, rating, featured_photo, time}
    const {favorites} = useContext(GlobalContext);
    let favoriteHouses = favorites.find(o => o.id === id);

    switch (type) {
        case "basic":
            return (<div className="card">
                <div className="cardBody">
                    <div className="imgContainer">
                        <Link to={"/detalhes/" + id}>
                            <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${featured_photo}`}/>
                        </Link>
                        <div className="controls">
                            <FavoriteControls house={houseInfo}/>
                        </div>

                    </div>
                    <div className="infoContainer">
                        <div className="info">
                            <div className="location">{`${city}, ${country}`}</div>
                            <div className="hostType">{`Anfitrião ${host_type}`}</div>
                            <div className="price"><b>{`${price}€`}</b> noite</div>
                        </div>
                        <div className="rating">
                            <FontAwesomeIcon icon={faStar}/>
                            {rating.toFixed(1)}
                        </div>
                    </div>
                </div>
            </div>)
        case "booking":
            return (
                <div className="card">
                    <div className="cardBody">
                        <div className="imgContainer">
                            <Link to={"/detalhes/" + id}>
                                <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${featured_photo}`}/>
                            </Link>
                            <div className="controls">
                                <FavoriteControls house={houseInfo}/>
                            </div>
                        </div>
                        <div className="infoContainer">
                            <div className="info">
                                <div className="location">{`${city}, ${country}`}</div>
                                <div className={"booking-date"}>{time}</div>
                                <div className={"price"}>{`${price}€`}</div>
                            </div>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar}/>
                                {rating.toFixed(1)}
                            </div>
                        </div>

            </div>
                </div>)
        case "favorite":
            return (<div className="favorite-card">
                        <div className="cardBody">
                            <div className="imgContainer">
                                <Link to={"/detalhes/" + id}>
                                    <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${featured_photo}`}/>
                                </Link>
                                <div className="controls">
                                    <FavoriteControls house={houseInfo}/>
                                </div>

                            </div>
                            <div className="infoContainer">
                                <div className="info">
                                    <div className="location">{city}</div>
                                    <div className="hostType">{`Anfitrião ${host_type}`}</div>
                                    <div className="price"><b>{`${price}€`}</b> noite</div>
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faStar}/>
                                        {rating.toFixed(1)}
                                    </div>
                                </div>
                            </div>


                </div>

            </div>)
    }
}
