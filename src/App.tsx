import React from "react";
import "./App.css";
import './components/FilmTable.css';
import './components/FilmDetails.css';
import './components/FavoriteButton.css';
import { FilmProvider } from "./context/FilmContext";
import FilmTable from "./components/FilmTable";
import FilmDetails from "./components/FilmDetails";

function App() {
    return (
        <FilmProvider>
            <div className="App">
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
