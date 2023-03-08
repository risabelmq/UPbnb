import "./Nav.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

import {NavLink, useHistory} from "react-router-dom";
import logo from "./logo_menu.svg"

export default function Nav(){
    return <div className="navBar">
        <div className={"container"}>
            <NavLink to={"/search"} className={"MagnifyingGlass"}><FontAwesomeIcon icon={faMagnifyingGlass}/></NavLink>
            <NavLink to={"/homepage"} className={"logo"}><img src={logo}/></NavLink>
            <NavLink to={"/favoritos"} className={"Heart"}><FontAwesomeIcon icon={faHeart}/></NavLink>
        </div>
    </div>;
}