import React from "react";
import ReactDom from "react-dom"
import { connect } from "react-redux";

import Header from "./Header";
import GameContainer from "./GameContainer";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="Layout">
                <Header></Header>
                <GameContainer></GameContainer>
            </div>
        );
    }
}