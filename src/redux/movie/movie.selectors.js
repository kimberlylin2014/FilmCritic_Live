import { createSelector } from 'reselect';

const movieSelector = (state) => state.movies;

export const selectMovieList = createSelector(
    [movieSelector],
    (movies) => movies.movieList
)

export const selectIsMovieListLoading = createSelector(
    [movieSelector],
    (movies) => movies.isLoading
)

export const selectIsTop3MovieListLoading = createSelector(
    [movieSelector],
    (movies) => movies.top3isLoading
)

export const selectMovieErrorMessage = createSelector(
    [movieSelector],
    (movies) => movies.errorMessage
)

export const selectSingleMoviePage = createSelector(
    [movieSelector],
    (movies) => movies.singleMoviePage
)

export const selectSessionExpireWarning = createSelector(
    [movieSelector],
    (movies) => movies.sessionExpireWarning
)

export const selectTopBanner = createSelector(
    [movieSelector],
    (movies) => {
       console.log(movies.top3)
       return movies.top3
    }
)