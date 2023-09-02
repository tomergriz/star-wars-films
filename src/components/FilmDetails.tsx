import React from 'react';

type Film = {
  title: string;
  opening_crawl: string;
};

type Props = {
  film: Film | null;
};

const FilmDetails: React.FC<Props> = ({ film }) => {
  return (
    <div>
      <h2>Film Details</h2>
      {film ? (
        <>
          <h3>{film.title}</h3>
          <p>{film.opening_crawl}</p>
        </>
      ) : (
        <p>Select a film to see its details.</p>
      )}
    </div>
  );
};

export default FilmDetails;
