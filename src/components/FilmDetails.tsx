import React from "react";
import { useFilmContext } from "../context/FilmContext";
import FavoriteButton from "./FavoriteButton";
import "./FilmDetails.css";

const FilmDetails: React.FC = () => {
    const { selectedFilm: film, favoriteFilms } = useFilmContext();

    const isFavorite = favoriteFilms.includes(film?.title || "");

    return (
        <div className={`film-details ${isFavorite ? "favorite" : ""}`}>
            <h2>Film Details</h2>
            {film ? (
                <>
                    <h3>{film.title}</h3>
                    <p>{film.opening_crawl}</p>
                    <FavoriteButton filmId={film.title} />
                </>
            ) : (
                <p>Select a film to see its details.</p>
            )}
        </div>
    );
};

export default FilmDetails;
