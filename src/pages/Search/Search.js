import "./Search.scss"
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "../../components/HouseCard/HouseCard"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [limitPages, setLimitPages] = useState(1);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas')
            .then(response =>
                setLimitPages(response.data.pages))
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas')
            .then(response =>
                setLimit(response.data.limit))
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas', {params: {page, search}})
            .then(response => setItems(page === 1 ? response.data.data : [...items, ...response.data.data]))
            .finally( () => {
                return setIsLoading(false)
            });

    }, [page, search]);

    useEffect(() => {
        setPage(1);
    }, [search]);

    return (
        <div className={"items"}>
            <div className="search-container">
                <input type="search" placeholder="Procurar" onChange={e => setSearch(e.target.value)} />
                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>

            <div className="houseCards">
            {!items && <p>A carregar</p>}
            {items && <>
                {items.length === 0 && <p>Sem resultados</p>}
                {items.map(h => <Card
                    type="basic"
                    key={h.id}
                    {...h}
                />)}
            </>}

            </div>
            {page < limitPages &&
                    <div className={"show-more"}>
                        <button disabled={isLoading===true} onClick={() => {
                        setPage(page + 1)
                            setIsLoading(true)
                    }}>
                        {items.length >= limit && <p>mais resultados</p>}
                        </button>
                    </div>}
        </div>
    )
}


