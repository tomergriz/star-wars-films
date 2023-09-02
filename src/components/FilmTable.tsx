import React from "react";
import "./FilmTable.css";
import { useFilmContext } from "../context/FilmContext";

const FilmTable: React.FC = () => {
    const { films, setSelectedFilm, favoriteFilms } = useFilmContext();

    return (
        <div className="film-table">
            <h2>Film Table</h2>
            <ul>
                {films.map((film, index) => (
                    <li
                        key={index}
                        className={`${favoriteFilms.includes(film.title) ? "favorite" : ""}                       `}
                        onClick={() => setSelectedFilm(film)}
                    >
                        {film.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmTable;
