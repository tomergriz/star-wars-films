import "./App.css";
import "./components/FilmTable.css";
import "./components/FilmDetails.css";
import "./components/FavoriteButton.css";
import { FilmProvider } from "./context/FilmContext";
import FilmTable from "./components/FilmTable";
import FilmDetails from "./components/FilmDetails";

function App() {
    return (
        <FilmProvider>
            <div className="App">
                <div className="video-background">
                    <iframe
                        title="background-video"
                        src="https://www.youtube.com/embed/EadT6NRVbF4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=EadT6NRVbF4"
                        allowFullScreen
                        allow="autoplay; muted"
                    ></iframe>
                </div>

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
