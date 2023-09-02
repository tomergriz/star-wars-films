import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export type Film = {
    title: string;
    opening_crawl: string;
};

type FilmContextProps = {
    films: Film[];
    selectedFilm: Film | null;
    setSelectedFilm: (film: Film | null) => void;
};

export const FilmContext = createContext<FilmContextProps | undefined>(undefined);

export const FilmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/films/")
            .then((res) => setFilms(res.data.results))
            .catch((err) => console.error("Error fetching films:", err));
    }, []);

    return <FilmContext.Provider value={{ films, selectedFilm, setSelectedFilm }}>{children}</FilmContext.Provider>;
};

export const useFilmContext = () => {
    const context = useContext(FilmContext);
    if (!context) {
        throw new Error("Context error");
    }
    return context;
};
