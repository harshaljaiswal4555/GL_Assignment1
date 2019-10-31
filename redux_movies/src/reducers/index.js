let defaultState={
    movies:[],
    selectedMovie: {}
}

const mainReducer=(state=defaultState, action)=>{
    switch (action.type){
    case 'MOVIELIST' :
        return{
            ...state,
            movies:action.movies
        }
    // case 'SpecificNews':
    //     return{
    //         ...state,
    //         selectedNews: state.news[action.id]
    //     }
    default:
        return{
            ...state
        }
    }
}

export default mainReducer;
