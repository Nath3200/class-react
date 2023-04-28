import React, { Component } from 'react';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          coursImportant: "- React js"
        },
        {
          id: 2,
          coursImportant: "- html css"
        },
        {
          id: 3,
          coursImportant: "- Vanilla javascript"
        }
      ]
    };
  }

  render() {
    return (
      <div className="list">
        <h1 className="prenom">Liste des cours importants : </h1>
        {this.state.list.map((cour) => (
          <div className="cours" key={cour.id}>
            {cour.coursImportant}
          </div>
        ))}
      </div>
    );
  }
}

export default List;