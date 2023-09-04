import React from "react";
import { useFilmContext } from "../../context/FilmContext";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const FilmDetails: React.FC = () => {
    const { selectedFilm: film, favoriteFilms } = useFilmContext();

    const isFavorite = favoriteFilms.includes(film?.title || "");

    const renderFilmDetails = () => (
        <>
            <h3>{film?.title}</h3>
            <p>{film?.opening_crawl}</p>
            <FavoriteButton filmId={film?.title || ""} />
        </>
    );

    const renderEmptyState = () => <p>Select a film to see its details.</p>;

    return (
        <div className={`film-details ${isFavorite ? "favorite" : ""}`}>
            <h2>Film Details</h2>
            {film ? renderFilmDetails() : renderEmptyState()}
        </div>
    );
};

export default FilmDetails;
