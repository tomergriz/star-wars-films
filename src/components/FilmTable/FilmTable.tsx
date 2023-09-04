import React, { useState } from "react";
import { useFilmContext } from "../../context/FilmContext";
import ReactGA from "react-ga";

const FilmTable: React.FC = () => {
    const { films, setSelectedFilm, favoriteFilms, loading } = useFilmContext();
    const [activeFilm, setActiveFilm] = useState<string | null>(null);

    const renderFilmList = (films: any, setSelectedFilm: any, favoriteFilms: string[]): JSX.Element[] => {
        return films.map((film: any, index: number) => (
            <li
                key={index}
                className={`${favoriteFilms.includes(film.title) ? "favorite" : ""} ${
                    activeFilm === film.title ? "active" : ""
                }`}
                onClick={() => {
                    setSelectedFilm(film);
                    setActiveFilm(film.title);
                    googleAnalyticsTrackFilmSelection(film.title, favoriteFilms.includes(film.title), index);
                }}
            >
                {film.title}
            </li>
        ));
    };

    const renderLoadingState = (): JSX.Element => {
        return <li className="star-wars-spinner"></li>;
    };

    const googleAnalyticsTrackFilmSelection = (filmTitle: string, isFavorite: boolean, index: number) => {
        ReactGA.event({
            category: "Film",
            action: `Selected a film: ${filmTitle}`,
            label: isFavorite ? "Favorite" : "Not Favorite",
            value: index,
        });
    };

    return (
        <div className="film-table">
            <h2>Films</h2>
            <ul>{loading ? renderLoadingState() : renderFilmList(films, setSelectedFilm, favoriteFilms)}</ul>
        </div>
    );
};

export default FilmTable;
