import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import NavBar from "./NavBar";


export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <h1>Sup, My Planet</h1>
                <NavBar></NavBar>
            </div>
        );
    }
}