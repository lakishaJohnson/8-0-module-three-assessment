import React from "react";
import "../Movies.css"

class Movies extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            currentMovie: null
        }
    }

    fetchMovies = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data, "hello")
            this.setState({
                movies: data
            })
        })
    }
    componentDidMount = () => {
        this.fetchMovies()
    }

    handleDropdownChange = (event) => {
        this.setState({
            currentMovie: event.target.value
        })
    }
    
    render() {
        let dropDownOptions = this.state.movies.map((movie, i) => {
            return <option key={i} value={movie.title}>{movie.title}</option>
        })
        
        let currentMovieObject = this.state.movies.find((movie) => {
            return movie.title === this.state.currentMovie
        })

    return (
      <div className="movies">
        <h1>Select a Movie</h1>
        <select onChange={this.handleDropdownChange}>
            <option value="">
                Select a Movie
            </option>
           {dropDownOptions} 
        </select>
       <h2>
           {currentMovieObject?.title}
       </h2>
       <p>{currentMovieObject?.release_date}</p> <p>{currentMovieObject?.description}</p>
      </div>
    );
  }
}
  
  export default Movies;