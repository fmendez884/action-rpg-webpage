import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import gobletFire from "../images/goblet-fire.gif";

export default class GobletFire extends React.Component {
    render() {
        return (
            <div style={{width: 100}}>
                <img className="gobletFireImage" src={gobletFire}></img>
            </div>
        );
    }
}