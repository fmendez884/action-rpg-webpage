import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import gobletFire from "../images/goblet-fire.gif";

export default class GobletFire extends React.Component {
    render() {
        return (
            <img src={gobletFire}></img>
        );
    }
}