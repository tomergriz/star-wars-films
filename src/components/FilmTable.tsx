import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Film = {
  title: string;
};

const FilmTable = () => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        setFilms(response.data.results);
      })
      .catch(error => {
        console.error("There was an error fetching data", error);
      });
  }, []);

  return (
    <div>
      <h2>Film Table</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmTable;
