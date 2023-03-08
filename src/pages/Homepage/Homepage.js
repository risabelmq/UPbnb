import "./Homepage.scss"
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import Card from "../../components/HouseCard/HouseCard";
import {GlobalContext} from "../../context/GlobalState";


export default function Homepage() {
    const [booking, setBooking] = useState("");
    const [pastBooking, setPastBooking] = useState("");
    const {favorites} = useContext(GlobalContext);


    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/current`)
            .then(response => setBooking(response.data.data));
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/past`)
            .then(response => setPastBooking(response.data.data));
    }, []);

    if (!booking || !pastBooking)
        return null;

    return (<div className={"homepage"}>
        <h2>Bem Vindo(a)</h2>
        <h3>Ao seu perfil</h3>
        <div className={"title"}>As minhas reservas</div>
        <div className="houseCards">
            {booking.map((b, idx) => (<Card type="recommendation" key={idx} {...b}/>))}
        </div>
            <div className={"title"}>Reservas Passadas</div>
        <div className="houseCards">
            {pastBooking.map((b, idx) => (<Card type="recommendation" key={idx} {...b}/>))}
        </div>





    </div>)
}
