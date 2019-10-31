import axios from 'axios';

export function loadmovies(){
    return(dispatch)=>{
        return axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/76341?api_key=98c1f0190f295dffc9fec60ca89538c9")
        .then((response)=>{ dispatch(fetchApi(response.data.results))
    })
  }
}

export function fetchApi(movies){
    return{
        type: "MOVIELIST",
        movies: movies 
    }
}