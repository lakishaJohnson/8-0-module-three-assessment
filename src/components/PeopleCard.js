import React from "react";

class PeopleCard extends React.Component {
  render() {
      
   
    
    // console.log(name, "hello")
    return (
        
        <div>
        
        <h4>Name: {this.props.name}</h4>
        <h4>Age: {this.props.age}</h4>
        <h4>Gender: {this.props.gender}</h4>
      </div>
    )
  }

}

export default PeopleCard;