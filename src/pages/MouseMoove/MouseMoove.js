import React, { Component } from 'react';
import {Link} from "react-router-dom"

class MouseMoove extends Component {
constructor(props) {
super(props);
this.state = { position: { x: 0, y: 0 } };
this.handleMouseMove = this.handleMouseMove.bind(this);
}

componentDidMount() {
window.addEventListener('mousemove', this.handleMouseMove);
}

componentWillUnmount() {
window.removeEventListener('mousemove', this.handleMouseMove);
}

handleMouseMove(event) {
this.setState({ position: { x: event.clientX, y: event.clientY } });
console.log("position",{ x: event.clientX, y: event.clientY });
}

render() {
return (
<div>
<Link to="/">
<button className="btn btn-danger">retour</button>
</Link>
<p>Position de la souris :</p>
<p>
X: {this.state.position.x}, Y: {this.state.position.y}
</p>
</div>
);
}
}

export default MouseMoove;