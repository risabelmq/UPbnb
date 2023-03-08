import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Search from "./pages/Search/Search";
import Homepage from "./pages/Homepage/Homepage";
import Details from "./pages/Details/Details";
import Nav from "./components/Nav/Nav";
import {Favorites} from "./pages/Favoritos/Favoritos";
import {GlobalProvider} from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>

        <BrowserRouter>
            <div className="App">
                <div className="content-body">
                    <Switch>
                        <Route path="/homepage" component={Homepage}/>
                        <Route path="/search" component={Search}/>
                        <Route path="/favoritos" component={Favorites}/>
                        <Route path="/detalhes/:house_id" component={Details}/>
                        <Route path="/" component={Homepage}/>
                    </Switch>
                </div>
                <Nav/>
            </div>
        </BrowserRouter>
        </GlobalProvider>

    );
}

export default App;
