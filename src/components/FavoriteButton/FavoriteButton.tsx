import React from 'react';
import { useFilmContext } from '../../context/FilmContext';
import './FavoriteButton.css';


type FavoriteButtonProps = {
  filmId: string;
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ filmId }) => {
  const { favoriteFilms, toggleFavorite } = useFilmContext();
  const isFavorite = favoriteFilms.includes(filmId);

  return (
    <button className={`favorite-button ${isFavorite ? 'active' : ''} `}
    onClick={() => toggleFavorite(filmId)}>
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
