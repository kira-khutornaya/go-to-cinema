import React from 'react';
import PropTypes from 'prop-types';
import { Movie } from './Movie';

export const Movies = ({ movies }) => {
  <main>
    <section className="movie">
      { movies.map((el) => (
        <Movie movie={el} key={el.id} />
      ))}
    </section>
  </main>;
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
    }),
  ),
};
