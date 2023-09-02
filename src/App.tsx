import React, { useState, useEffect } from "react";
import "./App.css";
import FilmTable from "./components/FilmTable";
import FilmDetails from './components/FilmDetails';
import axios from "axios";

type Film = {
    title: string;
    opening_crawl: string;
};

function App() {
    const [films, setFilms] = useState<Film[]>([]);
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/films/")
            .then((response) => {
                setFilms(response.data.results);
            })
            .catch((error) => {
                console.error("There was an error fetching data", error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Star Wars Films</h1>
            <div className="app-content">
            <FilmTable films={films} setSelectedFilm={setSelectedFilm}/>
            <FilmDetails film={selectedFilm} />
            </div>         
        </div>
    );
}

export default App;
