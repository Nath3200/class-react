import React, { Component } from 'react';
import './Blog.css';
import Introduction from '../../components/Introduction/Introduction';
import Lien from '../../components/Lien/Lien';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Blog extends Component {
constructor(props) {
super(props);
this.state = {
name: "Nathan Guedj",
activeFooter: false,
data: null
};
this.HandleName = this.HandleName.bind(this);
this.HandleFooter = this.HandleFooter.bind(this);
}

componentDidMount() {
console.log("mon blog est monte");
axios
.get("https://sabik-547abb.appdrag.site/api/getAllBlog", {
params: {
AD_PageNbr: "1",
AD_PageSize: "500"
}
})
.then(response => {
console.log(response.data);
this.setState({ data: response.data.Table });
});
}

HandleName(cb) {
this.setState({ name: cb });
}

HandleFooter() {
this.setState({ activeFooter: !this.state.activeFooter });
}

render() {
return (
<>
<header className='blog'>
<Introduction name={this.state.name} />
<Lien />
</header>

php
Copy code
    <h1>Welcome in my Blog</h1>

    {this.state.data &&
      this.state.data.map(row => (
        <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
          <h2>{row.title}</h2>
          <Link className="text-decoration-none text-dark" to={`/article/${row.id}`}>
            <img src={row.image} className='img-fluid'></img>
          </Link>
          <p>{row.article}</p>
          <p>{row.auteur}</p>
        </div>
      ))}

    {/* <Layout footer={this.state.activeFooter}>
      <div>Hello Blog</div>
      <button onClick={() => this.HandleFooter()}>active footer</button>
    </Layout> */}
  </>
);
}
}

export default Blog;