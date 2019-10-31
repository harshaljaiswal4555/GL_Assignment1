import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadmovies } from '../actions/getMovies';
import Details from '../components/Details'


class MovieScreen extends Component {
  componentDidMount() {
    this.props.moviesinf();
  }

  render() {

    return (
      <div className="HomeScreen">
        <h1 > Movie App </h1>
        <div className="MovieContainer">
        {(this.props.movies || []).map((data, index) => {
          return (
            <div className="movieBox" key={index}>
              <Details
                id={data.id}
                title={data.title}
                image={data.poster_path } />
            </div>
          )
        }
        )
        }
      </div>

      </div >
    )
  }
}


const mapStateToProps = (state) => {
  return { movies: state.movies }
};

const mapDispatchToProps = (dispatch) => {
  return { moviesinf: () => dispatch(loadmovies()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);