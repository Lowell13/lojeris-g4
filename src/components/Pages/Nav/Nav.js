import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div class="container main-header">
                <Link className="navbar-brand" to="/" class="logo"><span class="fa-stack fa-lg">
                    <i class="fa fa-home fa-stack-1x fa-inverse"></i>
                </span></Link>
            <nav class="main-nav">
                <ul>
                    <li><NavLink to="/" exact className="nav-link">Accueil</NavLink></li>
                    <li><a href="#">Notre Agence</a></li>
                    <li><NavLink to="/list" exact className="nav-link">Biens Immobiliers</NavLink></li>
                    <li><NavLink to="/post" exact className="nav-link">Proposez votre bien</NavLink></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Nav;
