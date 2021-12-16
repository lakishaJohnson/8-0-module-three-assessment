import React from "react";
import PeopleCard from "./PeopleCard"
import "../People.css"

class People extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      results: "",
      people: [],
      currentPerson: null
    };
  }

  fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          people: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount = () => {
    this.fetchPeople()
  }

  
  handleUserInput = (event) => {
      this.setState({
          userInput: event.target.value,
        });
    };
    
    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            results: this.state.userInput,
        });
          this.fetchPeople();
  };

  render() {
    const peopleToDisplay = this.state.people.keys((person, i) => {
      return <PeopleCard key={i} peep={person} />
    
    });

   let currentPersonObject = this.state.people.find((person) => {
       return person.name === this.state.currentPerson
   })

    return (
      <div className="people">
        <h1>Search for a Person</h1>

        <form onClick={this.handleClick}>
          <div className="search">
            <input
              type="text"
              placeholder="Find Your Person"
              id="search"
              value={this.state.userInput}
              onChange={this.handleUserInput}
            />
            <button type="submit" id="search-btn">
              Submit
            </button>
          </div>
        </form>
        {/* <div>
            {currentPersonObject === 0 ? (<p>Not Found</p>) : {peopleToDisplay}}
        </div> */}
      </div>
    );
  }
}

export default People;
