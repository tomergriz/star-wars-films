import React from "react";
import "./App.css";
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
