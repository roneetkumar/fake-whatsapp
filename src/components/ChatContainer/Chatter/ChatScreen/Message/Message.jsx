import React, { Component } from "react";
import "./message.css"


export default class Message extends Component {
    render() {
        return (
            <div className="message from">
                <h1>{this.props.message.message} <span>{`${new Date(this.props.message.time.seconds * 1000).toDateString()} ${new Date(this.props.message.time.seconds * 1000).toLocaleTimeString()}`}</span></h1>
            </div>
        )
    }
}
