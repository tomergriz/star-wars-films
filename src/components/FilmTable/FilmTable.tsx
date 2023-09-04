import React from "react";
import { useFilmContext } from "../../context/FilmContext";

const FilmTable: React.FC = () => {
    const { films, setSelectedFilm, favoriteFilms, loading } = useFilmContext();

    const renderFilmList = (films: any, setSelectedFilm: any, favoriteFilms: string[]): JSX.Element[] => {
        return films.map((film: any, index: number) => (
            <li
                key={index}
                className={`${favoriteFilms.includes(film.title) ? "favorite" : ""}`}
                onClick={() => setSelectedFilm(film)}
            >
                {film.title}
            </li>
        ));
    };

    const renderLoadingState = (): JSX.Element => {
        return <li className="star-wars-spinner"></li>;
    };

    return (
        <div className="film-table">
            <h2>Film Table</h2>
            <ul>{loading ? renderLoadingState() : renderFilmList(films, setSelectedFilm, favoriteFilms)}</ul>
        </div>
    );
};

export default FilmTable;
