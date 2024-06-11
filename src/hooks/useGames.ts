import { GameQuery } from "../App";
import GenreList from "../components/GenreList";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:  Platform}[],
    metacritic: number
  }
  
const useGames = (gameQuery: GameQuery | null) => useData<Game>('/games', 
  {params: 
    { genres: gameQuery?.genre?.id, 
      platforms: gameQuery?.platform?.id,
  ordering: gameQuery?.sortOrder,
  search: gameQuery?.searchText,
}},[gameQuery]);

export default useGames;