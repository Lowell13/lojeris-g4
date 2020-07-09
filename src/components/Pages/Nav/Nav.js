import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div style={{display: "inline-block", width: "10%"}}></div>
                <div style={{display: "inline-block", width: "20%"}}>
                    <div style={{display: "block"}}>
                        <p style={{visibility: "hidden"}}>>Espace</p>
                        <Link className="navbar-brand" to="/">Lojeris</Link>
                        <p style={{visibility: "hidden"}}>>Espace</p>
                    </div>
                </div>
                <div style={{display: "inline-block", width: "60%"}} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="nav-item">
                            <p style={{visibility: "hidden"}}>>Espace</p>
                            <NavLink to="/" exact className="nav-link">Home</NavLink>
                            <p style={{visibility: "hidden"}}>>Espace</p>
                        </div>
                        <div className="nav-item">
                            <p style={{visibility: "hidden"}}>>Espace</p>
                            <NavLink to="/list" exact className="nav-link">List</NavLink>
                            <p style={{visibility: "hidden"}}>>Espace</p>
                        </div>
                        <div className="nav-item">
                            <p style={{visibility: "hidden"}}>>Espace</p>
                            <NavLink to="/post" exact className="nav-link">Post</NavLink>
                            <p style={{visibility: "hidden"}}>>Espace</p>
                        </div>
                    </div>
                </div>
                <div style={{display: "inline-block", width: "10%"}}></div>
            </nav>
        );
    }
}

export default Nav;
