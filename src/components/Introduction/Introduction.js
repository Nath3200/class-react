import React, { Component } from 'react';
import "./Introduction.css";

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: "red",
    }
  }

  handleClick = () => {
    this.setState({ changeColor: "blue" });
  }

  render() {
    const { name } = this.props;
    const { changeColor } = this.state;

    return (
      <div className="conteneur">
        <div className="normal-flex">
          <div className="haut-gauche">
            <h1 className={`text-${changeColor}`} onClick={this.handleClick}>{name}</h1>
            <strong>Communication</strong> /
            <strong>Marketing</strong> /
            <strong>Digital</strong>
          </div>
          <div className="haut-droit">
            <a href="/cv">Télécharger mon c.v.</a>
          </div>
        </div>
      </div> 
    );
  }
}

export default Introduction;