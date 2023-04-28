import React, { Component } from 'react';

class SetIntervalCompo extends Component {
constructor(props) {
super(props);
this.state = {
time: 0,
};
}

componentDidMount() {
this.intervalId = setInterval(() => {
this.setState(prevState => {
console.log(prevState.time);
return { time: prevState.time + 1 };
});
}, 1000);
}

componentWillUnmount() {
clearInterval(this.intervalId);
}

render() {
return (
<div>
<h1>Mon compteur tourne depuis : {this.state.time}</h1>
</div>
);
}
}

export default SetIntervalCompo;