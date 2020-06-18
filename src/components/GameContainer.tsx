import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import DummyWebPlayer from "./DummyWebPlayer";
import GobletFire from "./GobletFire";


export default class GameContainer extends React.Component {
    render() {
        return (
            <div className="GameContainer nes-container is-dark">
                <DummyWebPlayer></DummyWebPlayer>
            </div>
        );
    }
}