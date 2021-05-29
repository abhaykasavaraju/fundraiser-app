import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
    render() {
        return (
            <div>
                 <Link to={{
                            pathname: "/fundraisers",
                            }}
                               
                               
                 className="btn btn-warning">Fundraisers</Link>

<Link to={{pathname: "/Events"}}
                className="btn btn-warning">Events</Link>
            </div>
        )
    }
}

export default Home
