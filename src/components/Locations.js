import React from "react";
import "../Locations.css"

class Location extends React.Component{
  constructor() {
    super()

    this.state = {
      // locationData: {},
      showLocation: true,
      locations: [],
      text: "Show Locations"
    }
  }

  changeText = () => {
    this.setState({
      text: "Hide Locations"
    })
  }

  changeText2 = () => {
    this.setState({
      text: "Hide Locations"
    })
  }

  toggleLocations = (event) => {
    event.preventDefault()
    this.setState({
      showLocation: !this.state.showLocation
    })
  }
  
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
          <div className="location-view" key={i}>
            <ul>
              <li>
            <h3>Name: {spot.name}</h3>
            <h3>Climate: {spot.climate}</h3>
            <h3>Terrain: {spot.terrain}</h3></li></ul>
          </div>
        )
      })

    return (
      <div className="locations">
        <main>
          <h1>List of Locations</h1>
        </main>
        
        <button onClick={() => {this.changeText()}}>{this.state.text}</button>
        <div>
          {this.state.showLocation ? locate : ""}
        </div>
        
      </div>
    );
  }
}
  
  export default Location;