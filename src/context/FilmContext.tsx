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
    }, []);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favoriteFilms");
        if (storedFavorites) {
            setFavoriteFilms(JSON.parse(storedFavorites));
        }
    }, []);

    const toggleFavorite = (filmId: string) => {
        const favoriteSet = new Set(favoriteFilms);

        if (favoriteSet.has(filmId)) {
            favoriteSet.delete(filmId);
        } else {
            favoriteSet.add(filmId);
        }

        const newFavorites = Array.from(favoriteSet);
        localStorage.setItem("favoriteFilms", JSON.stringify(newFavorites));
        setFavoriteFilms(newFavorites);
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
