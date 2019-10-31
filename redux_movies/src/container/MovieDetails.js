import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadmovies } from '../actions/getMovies';


class MovieScreen extends Component {

  componentDidMount() {
    this.props.moviesinf();
  }

  render() {
    if(this.props.movies)
    return (
      <div className="movieDetail">
        <div className="movieDetailBox" >
            <h1 className="MovieTitle"> {this.props.movies.title} </h1>
            <div className="imgDetail">
            <p className='detailPara'>{this.props.movies.overview}</p>
            <img className='img' src={"https://image.tmdb.org/t/p/w500"+this.props.movies.poster_path} alt=""></img>
            
            </div>
        </div>
      </div>

    )
    else
      return <></>
  }
}


const mapStateToProps = (state,ownprops) => {
  //eslint-disable-next-line
  return { movies: state.movies.filter((movies) => movies.id == ownprops.match.params.id)[0] }
};

const mapDispatchToProps = (dispatch) => {
  return { moviesinf: () => dispatch(loadmovies()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);