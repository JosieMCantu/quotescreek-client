import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/quotesCreek">List</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/create">Create</NavLink></li>
                </ul>
            </div>
        )
    }
}

