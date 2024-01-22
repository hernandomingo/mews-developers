import type { SimpleMovie } from "../../app/slices/movieList/interfaces/simple-movie"
import { StyledButton } from "../button/Button.styled"
import EmptyList from "../empty-list/EmptyList"
import { StyledFlex } from "../flex/Flex.styled"
import MovieCard from "../movie-card/MovieCard"
import { StyledMovieList } from "./MovieList.styled"
interface Props {
  movies: SimpleMovie[]
}

const MovieList = ({ movies }: Props) => {
  return movies.length === 0 ? (
    <EmptyList />
  ) : (
    <>
      <StyledMovieList>
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </StyledMovieList>
      <StyledFlex>
        <StyledButton>Load More</StyledButton>
      </StyledFlex>
    </>
  )
}
export default MovieList
