import React from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie }) {
  const {
    name, description, poster, country, duration,
  } = movie;

  return (
    <div className="movie__info">
      <div className="movie__poster">
        <img className="movie__poster-image" alt={name} src={poster} />
      </div>

      <div className="movie__description">
        <h2 className="movie__title">{name}</h2>
        <p className="movie__synopsis">{description}</p>
        <p className="movie__data">
          <span className="movie__data-duration">
            `$
            {duration}
            {' '}
            минут`
          </span>
          <span className="movie__data-origin">{country}</span>
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  }).isRequired,
};
