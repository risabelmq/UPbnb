import "./Details.scss"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faCircle} from "@fortawesome/free-solid-svg-icons";
import ac from "./icones_upbnb/ac.svg"
import dog from "./icones_upbnb/dog.svg"
import tv from "./icones_upbnb/tv.svg"
import microwave from "./icones_upbnb/microwave.svg"
import wifi from "./icones_upbnb/wifi.svg"
import fireplace from "./icones_upbnb/fireplace.svg"
import washer from "./icones_upbnb/washer.svg"
import smoking from "./icones_upbnb/smoking.svg"
import {FavoriteControls} from "../../components/FavoriteControls/FavoriteControls";




export default function Details() {
    const {house_id} = useParams();
    const [details, setDetails] = useState("");
    const [features, setFeatures] = useState("");
    const [host, setHost] = useState("");
    const [photos, setPhotos] = useState("");
    const [review, setReviews] = useState("");



    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${house_id}`)
            .then(response => setDetails(response.data));
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${house_id}/features`)
            .then(response => setFeatures(response.data));
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${house_id}/host`)
            .then(response => setHost(response.data));
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${house_id}/photos`)
            .then(response => setPhotos(response.data.photos));
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${house_id}/reviews`)
            .then(response => setReviews(response.data.reviews));
    }, []);


    console.log(photos)
    if (!details || !photos || !review || !features)
        return null;

    return (
        <div className={"details"}>
            <div className="title">{details.title}</div>
            <div className="rating-location-container">
                    <FontAwesomeIcon icon={faStar}/>
                <div className="rating">
                    {details.rating.toFixed(1)}
                </div>
                <div className="location">
                    <FontAwesomeIcon icon={faCircle}/>
                    {`${details.city}, ${details.country}`}</div>
            </div>
            <div className="featured-photo">
                <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${details.featured_photo}`}/>
                <div className="controls">
                    <FavoriteControls house={details}/>
                </div>
            </div>
            <div className="price"><b>{`${details.price}€`}</b> noite</div>
            <div className="description">{details.description}</div> {/*TODO: acrescentar descricao, passar features como icos, css galeria margem ao meio*/}

            <div className="features">

                <div className={"available"}>
                    {features.features.includes("airConditioner") && <img class="change-my-color" className={"available"} src={ac}/>}
                    {features.features.includes("petsAllowed") && <img className={"available"} src={dog}/>}
                    {features.features.includes("tv") && <img className={"available"} src={tv}/>}
                    {features.features.includes("microwave") && <img className={"available"} src={microwave}/>}
                    {features.features.includes("wifi") && <img className={"available"} src={wifi}/>}
                    {features.features.includes("fireplace") && <img className={"available"} src={fireplace}/>}
                    {features.features.includes("washingMachine") && <img className={"available"} src={washer}/>}
                    {features.features.includes("smokingAllowed") && <img className={"available"} src={smoking}/>}
                </div>
                <div className="not-available">
                    {!features.features.includes("airConditioner") && <img className={"not-available"} src={ac}/>}
                    {!features.features.includes("petsAllowed") && <img className={"not-available"} src={dog}/>}
                    {!features.features.includes("tv") && <img className={"not-available"} src={tv}/>}
                    {!features.features.includes("microwave") && <img className={"not-available"} src={microwave}/>}
                    {!features.features.includes("wifi") && <img className={"not-available"} src={wifi}/>}
                    {!features.features.includes("fireplace") && <img className={"not-available"} src={fireplace}/>}
                    {!features.features.includes("washingMachine") && <img className={"not-available"} src={washer}/>}
                    {!features.features.includes("smokingAllowed") && <img className={"not-available"} src={smoking}/>}
                </div>
            </div>
            <div className="about-host">Sobre o Anfitrião</div>

            <div className="host">
                <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${host.photo}`}/>
                <div className="host-details">
                    <div className="host-name">{host.name}</div>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar}/>
                        {host.rating.toFixed(1)}
                    </div>
                </div>

            </div>
            <div className="gallery" key="i">
                {photos.map((p, i) => {
                    if (i === 0)
                        return;
                    return <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${p}`}/>
                })}
            </div>
            <div className="reviews">Comentários</div>
            {review.map((r, idx) => (

                <div className="review" key={idx}>
                        <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${r.photo}`}/>
                    <div className="guest-details">
                        <div className={"guest-name"}>{r.name}</div>
                        <div className={"date"}>{r.date}</div>
                    </div>
                    <div className={"comment"}>{r.comment}</div>
                </div>))}
        </div>)
}