import React from 'react'
import styles from './styles'
import { connect } from 'react-redux';
import { updateMovieInfo } from '../ducks/movieReducer';

const MovieConfirm = props => {
  const confirmMovie = () => {
    props.history.push('/list')
  }

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${props.title} - ${props.rating}`}</p>
      <img src={`${props.poster}`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = reduxState => {
  const { title, poster, rating } = reduxState
  return {
    title, 
    poster,
    rating
  }
}

export default connect(mapStateToProps, {updateMovieInfo}) (MovieConfirm)
