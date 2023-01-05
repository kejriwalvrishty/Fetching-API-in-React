import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.data,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    console.log(items);
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item, index) => (
          <ol key={index}>
            ID: {item.id}, First_Name: {item.first_name}, Last_Name:{" "}
            {item.last_name}, Email:
            {item.email}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
