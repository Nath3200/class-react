import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class UseEffectCompo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        console.log("mon composant est monté");

        axios.get('https://sabik-547abb.appdrag.site/api/getAllArticles', {
            params: {
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(response => {
            console.log(response.data.Table);
            this.setState({ data: response.data.Table });
        });
    }

    render() {
        return (
            <div>
                <h1>hello UseEffectCompo</h1>
                {
                    this.state.data && this.state.data.map(row => (
                        <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
                            <h2>{row.title}</h2>
                            <p>{row.article}</p>
                            <button className='btn btn-danger' style={{ borderRadius: "50px" }}>alert</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default UseEffectCompo;
