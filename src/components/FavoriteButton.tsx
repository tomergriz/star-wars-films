import React, { useEffect } from 'react';
import { useFilmContext } from '../context/FilmContext';

type FavoriteButtonProps = {
  filmId: string;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ filmId }) => {
  const { favoriteFilms, toggleFavorite } = useFilmContext();
  const isFavorite = favoriteFilms.includes(filmId);

  return (
    <button onClick={() => toggleFavorite(filmId)}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default FavoriteButton;
