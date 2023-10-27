import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailer = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["trailers", id],
    queryFn: apiClient.getAll,
  });
};
export default useTrailer;
