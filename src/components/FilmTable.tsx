import React from "react";
import { useFilmContext } from '../context/FilmContext';

const FilmTable: React.FC = () => {
    const { films, setSelectedFilm } = useFilmContext();

    return (
        <div>
            <h2>Film Table</h2>
            <ul>
                {films.map((film, index) => (
                    <li key={index} onClick={() => setSelectedFilm(film)}>
                      {film.title}
                      </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmTable;
