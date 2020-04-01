import React, { Component } from "react";
import "./chat-screen.css"
import Message from "./Message/Message"


export default class ChatScreen extends Component {

    render() {
        return (
            <main className="chat-screen">
                {
                    this.props.myMessages?.map((message, i) => <Message
                        key={i}
                        message={message}
                        className={(this.props.id !== message.to) ? "right" : "left"} />)
                }
            </main>
        )
    }
}
