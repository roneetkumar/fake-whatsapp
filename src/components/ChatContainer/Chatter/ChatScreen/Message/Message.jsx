import React, { Component } from "react";
import "./message.css"


export default class Message extends Component {
    render() {
        return (
            <div className="message from">
                <h1>{this.props.message.content} <span>{this.props.message.time}</span></h1>
            </div>
        )
    }
}
