// 

import React from 'react';
import netflixData from './netflixseries.json'; // Correct relative path

const NetflixMovies = () => {
  // Function to generate stars based on rating
  const generateStars = (rating) => {
    const stars = Math.round(rating); // Round the rating to the nearest integer
    return "★".repeat(stars) + "☆".repeat(10 - stars); // Max 10 stars
  };

  return (
    <div className="netflix-movies-grid">
      {netflixData.map((movie) => (
        <div
          key={movie.id}
          className={
            "netflix-movie-card" +
            ([3, 4, 5].includes(movie.id) ? " small-card" : "")
          }
        >
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          {/* Dynamically set the class based on the rating */}
          <p className={movie.rating >= 8.5 ? "superhit" : "average"}>
            <strong>Rating:</strong> {movie.rating}
          </p>
          <p className="stars">{generateStars(movie.rating)}</p>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
          <a href={movie.watchNowUrl} target="_blank" rel="noopener noreferrer">
            Watch Now
          </a>
        </div>
      ))}
    </div>
  );
};

export default NetflixMovies;