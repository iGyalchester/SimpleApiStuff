import React from "react";
import { Button } from "react-bootstrap";

class UserGenerator extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  clickHandler = () => {
    this.componentDidMount();
  };

  //show person only after button is clicked
  getUser = () => {
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <div className="text">
            <div className="text-title">{this.state.person.name.title}</div>
            <div className="text-first">{this.state.person.name.first}</div>
            <div className="text-last">{this.state.person.name.last}</div>
          </div>
          <img className="userPic" src={this.state.person.picture.large} alt="avatar" />
        </div>
      );
    }
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div className="div-container">
        <div>
          <h1>User Generator</h1>
        </div>
        <Button variant="primary" size="lg" active onClick={this.clickHandler}>
          Generate User!
        </Button>
        {this.getUser()}
      </div>
    );
  }
}

export default UserGenerator;
