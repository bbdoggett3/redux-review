const initialState = {
    title: '',
    poster: '',
    rating: null,
    movies: []
}

const SET_MOVIE_INFO = "SET_MOVIE_INFO";
const CONFIRM_MOVIE = "CONFIRM_MOVIE"

export function setMovieInfo(title, poster, rating) {
    return {
        type: SET_MOVIE_INFO,
        payload: {
            title,
            poster,
            rating
        }
    }
}

export function updateMovieInfo(movieObj) {
    return {
        type: CONFIRM_MOVIE,
        payload: movieObj
    }
}
export default function movieReducer(state = initialState, action) {
    switch(action.type) {
        case SET_MOVIE_INFO:
            return {...state, ...action.payload }
            case CONFIRM_MOVIE:
                return {
                    ...state,
                    title: '',
                    poster: '',
                    rating: null,
                    movies: [...state.movies, action.payload],
                  }
        default:
            return state
    } 
}