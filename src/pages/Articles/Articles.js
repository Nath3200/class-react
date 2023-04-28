import React, { Component } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const location = useLocation();
        console.log("location", location.pathname.slice(9))

        axios.get('https://sabik-547abb.appdrag.site/api/getApiId', {
            params: {
                "id": location.pathname.slice(9),
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then((response) => {
            console.log(response.data);
            this.setState({
                data: response.data.Table[0],
            });
        });
    }

    render() {
        return (
            <div>
                <div className='row justify-content-center'>
                    {this.state.data &&
                        <div className='col-10 bg-light shadow rounded-4 m-3 p-3'>
                            <div>{this.state.data.id}</div>
                            <h1 className='text-center'>{this.state.data.title}</h1>
                            <p className='p my-4'>{this.state.data.article}</p>
                            <img src={this.state.data.image} />
                            <p>{this.state.data.auteur}</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Articles;
