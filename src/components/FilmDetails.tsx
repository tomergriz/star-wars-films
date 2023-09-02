import React from "react";
import { useFilmContext } from "../context/FilmContext";

const FilmDetails: React.FC = () => {
    const { selectedFilm: film } = useFilmContext();

    return (
        <div>
            <h2>Film Details</h2>
            {film ? (
                <>
                    <h3>{film.title}</h3>
                    <p>{film.opening_crawl}</p>
                </>
            ) : (
                <p>Select a film to see its details.</p>
            )}
        </div>
    );
};

export default FilmDetails;
