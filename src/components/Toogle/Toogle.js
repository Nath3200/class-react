import React, { Component } from 'react';
import './Toogle.css';

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = { toogle: false };
    this.ActiveToogle = this.ActiveToogle.bind(this);
  }

  ActiveToogle() {
    this.setState({ toogle: !this.state.toogle });
  }

  render() {
    return (
      <div className='toogle'>
        <h1 className='name'>Welcome to the Toogle</h1>
        <button className='bouton' onClick={this.ActiveToogle}>
          Active Toogle
        </button>
        {this.state.toogle && <div className='coucou'>coucou</div>}
      </div>
    );
  }
}

export default Toogle;


// import React, {useState} from 'react'
// import './Toogle.css'; 

// const Toogle = () => {

// const [toogle, setToogle] = useState(false);

// const ActiveToogle = () => {
//     setToogle(!toogle)
// }
//   return (
//     <div className='toogle'>
//       <h1 className='name'>Welcome to the Toogle</h1>

//         <button className='bouton' onClick={() => ActiveToogle()}>Active Toogle</button>

//           {toogle && 
//           <div className='coucou'>coucou</div>
//           }

          
          
//     </div>
//   )
// }

// export default Toogle