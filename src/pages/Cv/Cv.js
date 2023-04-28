import React, { Component } from 'react';
import Introduction from '../../components/Introduction/Introduction';
import Main from '../../components/Main/Main';
import Lien from '../../components/Lien/Lien';
import Sect from '../../components/Sect/Sect';
import Footer from '../../components/Footer/Footer';

class Cv extends Component {
constructor(props) {
super(props);
this.state = { name: "Nathan Guedj" };
this.HandleName = this.HandleName.bind(this);
}

HandleName(cb) {
this.setState({ name: cb });
}

render() {
return (
<div className="">
<header>
<Introduction name={this.state.name} />
<Lien />
</header>
<Sect />
<Main HandleName={this.HandleName} name={this.state.name} />
<Footer name={this.state.name} />
</div>
);
}
}

export default Cv;


// import React, {useState} from 'react';
// import Introduction from '../../components/Introduction/Introduction';
// import Main from '../../components/Main/Main';
// import Lien from '../../components/Lien/Lien';
// import Sect from '../../components/Sect/Sect';
// import Footer from '../../components/Footer/Footer';

// const Cv = () => {

//     const [name, setName] = useState("Nathan Guedj");
//     // let name = "nathan guedj"
//     // cb = callback
//     const HandleName = (cb)=>{ //importer test du l enfant
//        setName(cb)
//     }
//   return (
//     <div className="">
//       <header>
//             <Introduction name={name}/>

// 			<Lien/>

// 		</header>
		
// 		<Sect/>

//       <Main HandleName={HandleName} name={name}/>

//       <Footer name={name}/>
//     </div>
//   );
// }

// export default Cv