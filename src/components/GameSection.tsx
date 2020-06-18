import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import DummyWebPlayer from "./DummyWebPlayer";
import GobletFire from "./GobletFire";
import GameContainer from "./GameContainer";


export default class GameSection extends React.Component {
    render() {
        return (
            <div className="GameSection">
                <GobletFire></GobletFire>
                <GameContainer></GameContainer>
                <GobletFire></GobletFire>
            </div>
        );
    }
}