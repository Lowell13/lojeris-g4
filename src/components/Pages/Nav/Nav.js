import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Lojeris</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/list" exact className="nav-link">List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/post" exact className="nav-link">Post</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
