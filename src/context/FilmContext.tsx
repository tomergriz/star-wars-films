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
    favoriteFilms: string[];
    toggleFavorite: (filmId: string) => void;
    loading: boolean;
};

export const FilmContext = createContext<FilmContextProps | undefined>(undefined);

export const FilmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
    const [favoriteFilms, setFavoriteFilms] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://swapi.dev/api/films/")
            .then((res: any) => {
                setFilms(res.data.results);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error("Error fetching films:", err);
                setLoading(false);
            });

        const storedFavorites = localStorage.getItem("favoriteFilms");
        if (storedFavorites) {
            setFavoriteFilms(JSON.parse(storedFavorites));
        }
    }, []);

    const toggleFavorite = (filmTitle: string) => {
        const isFilmAlreadyFavorite = favoriteFilms.includes(filmTitle);

        const updatedFavoriteFilms = isFilmAlreadyFavorite
            ? favoriteFilms.filter((existingTitle) => existingTitle !== filmTitle)
            : [...favoriteFilms, filmTitle];

        localStorage.setItem("favoriteFilms", JSON.stringify(updatedFavoriteFilms));

        setFavoriteFilms(updatedFavoriteFilms);
    };

    return (
        <FilmContext.Provider value={{ films, selectedFilm, setSelectedFilm, favoriteFilms, toggleFavorite, loading }}>
            {children}
        </FilmContext.Provider>
    );
};

export const useFilmContext = () => {
    const context = useContext(FilmContext);
    if (!context) {
        throw new Error("Context error");
    }
    return context;
};
