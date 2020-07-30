import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";


export default class NavBar extends React.Component {
    render() {
        return (
            <div className= "navBar-container">
                <nav className="NavBar nes-container is-dark">
                    <span>NavBar</span>
                </nav>
            </div>
        );
    }
}