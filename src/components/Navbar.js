import React from "react";
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
    return (
      <nav className="navbar">
          <Link to="/">
              <img className="logo" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg" alt="logo" />
          </Link>
          <Link to="/movies">Movies</Link>
          <Link to="/people">People</Link>
          <Link to="/locations">Locations</Link>
          
      </nav>
    );
  }
}
  
  export default Navbar;