import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#343a40"}}>
                <p style={{visibility: "hidden"}}>>Espace</p>
                <div style={{display: "inline-block", width: "10%"}}></div>
                <div style={{display: "inline-block", width: "20%"}}>
                    <div style={{display: "block"}}>
                        <Link className="navbar-brand" to="/" style={{color: "white", textDecoration: "none"}}>Lojeris</Link>
                    </div>
                </div>
                <div style={{display: "inline-block", width: "60%"}} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto" style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="nav-item">
                            <NavLink to="/" exact className="nav-link" style={{color: "white", textDecoration: "none"}}>Home</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink to="/list" exact className="nav-link" style={{color: "white", textDecoration: "none"}}>List</NavLink>
                        </div>
                        <div className="nav-item">
                            <NavLink to="/post" exact className="nav-link" style={{color: "white", textDecoration: "none"}}>Post</NavLink>
                        </div>
                    </div>
                </div>
                <div style={{display: "inline-block", width: "10%"}}></div>
                <p style={{visibility: "hidden"}}>>Espace</p>
            </nav>
        );
    }
}

export default Nav;
