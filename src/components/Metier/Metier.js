import React, { Component } from 'react';
import './Metier.css';

class Metier extends Component {

  state = {
    id: 1,
    metier: "fullstack dev",
    niveau: "en formation"
  };

  handleJunior = () => {
    this.setState({ niveau: "junior" });
  }

  handleIntermediaire = () => {
    this.setState({ niveau: "intermediaire" });
  }

  handleSenior = () => {
    this.setState({ niveau: "senior" });
  }

  render() {
    return (
      <div className='metier'>
        <h1 className='nom'>Je suis {this.state.metier} {" "} {this.state.niveau}</h1>
        <button className='junior' onClick={this.handleJunior}>
          dans trois mois, je serais junior
        </button>
        <button className='intermediaire' onClick={this.handleIntermediaire}>
          dans un an, je serais intermediaire
        </button>
        <button className='senior' onClick={this.handleSenior}>
          dans cinq ans, je serais senior
        </button>
      </div>
    );
  }
}

export default Metier;
