import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { error, genres, isLoading } = useGenres();
  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;