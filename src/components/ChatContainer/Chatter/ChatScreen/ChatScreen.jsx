import React, { Component } from "react";
import "./chat-screen.css"
import From from "./From/From";
import To from "./To/To";

export default class ChatScreen extends Component {
    render() {
        return (
            <main className="chat-screen">
                <To to={this.props.messages} />
                <From from={this.props.messages} />
            </main>
        )
    }
}
