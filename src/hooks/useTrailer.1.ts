import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailer = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  useQuery({
    qF,
  });
};
