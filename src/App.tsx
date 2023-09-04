
import "./App.css";
import "../src/components/FilmTable/FilmTable.css";
import "../src/components/FilmDetails/FilmDetails.css";
import "../src/components/FavoriteButton/FavoriteButton.css";
import { FilmProvider } from "./context/FilmContext";
import FilmTable from "./components/FilmTable/FilmTable";
import FilmDetails from "../src/components/FilmDetails/FilmDetails";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import ReactGA from 'react-ga';

ReactGA.initialize('G-4150T8DVPS');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <FilmProvider>
            <div className="App">
                <VideoBackground />

                <h1>Star Wars Films</h1>
                <div className="app-content">
                    <FilmTable />
                    <FilmDetails />
                </div>
            </div>
        </FilmProvider>
    );
}

export default App;
