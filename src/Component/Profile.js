import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.person = {
      fullName: "Mastouri Malek",
      bio: "Civil engineer",
      profession: "Student web development",
      img: "https://www.approvedcourse.com/wp-content/uploads/2021/07/Civil-Engineer.png",
    };
    this.state = { count: 0 };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 0.5,
      }));
    }, 1000);
  }

  render() {
    return (
      <div className="prof">
        <h1>{this.person.fullName}</h1>
        <h1>{this.person.bio}</h1>
        <h1>{this.person.profession}</h1>
        <img className="tof" src={this.person.img} alt="tof" />
        <h1> {this.state.count} </h1>
      </div>
    );
  }
}
