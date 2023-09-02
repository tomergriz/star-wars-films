import React from "react";

type Film = {
    title: string;
    opening_crawl: string
};

type Props = {
    films: Film[];
    setSelectedFilm: React.Dispatch<React.SetStateAction<Film | null>>;
};

const FilmTable: React.FC<Props> = ({ films, setSelectedFilm }) => {
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
