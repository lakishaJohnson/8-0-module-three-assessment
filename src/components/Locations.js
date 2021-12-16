import React from "react";
import "../Locations.css"

class Location extends React.Component{
  constructor() {
    super()

    this.state = {
      // locationData: {},
      showLocation: false,
      locations: [],
    }
    this.changeText = this.changeText.bind(this)
  }

  changeText = () => {
    this.setState({
      showLocation: !this.state.showLocation
    })
  }

  // toggleLocations = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     locations: 
  //   })
  // }
  
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then((res) => res.json())
    .then((locations) => {
      console.log(locations)
      this.setState({
        locations: locations
      })
    })
  }
  
  render() {
      let locate = this.state.locations.map((spot, i) => {
        return (
          // <div className="location-view" key={i}>
          //   <ul>
              <li key={i}>
            <h3>Name: {spot.name}</h3>
            <h3>Climate: {spot.climate}</h3>
            <h3>Terrain: {spot.terrain}</h3></li>
          //   </ul>
          // </div>
        )
      })

    return (
      <div className="locations">
        <main>
          <h1>List of Locations</h1>
        </main>
        
        <button onClick={this.changeText}>{this.state.showLocation ? "Hide Locations" : "Show Locations"}
        
        </button>
        <div className="location-view" >
            <ul>
          {this.state.showLocation && locate}
          </ul>
        
        </div>
        
      </div>
    );
  }
}
  
  export default Location;