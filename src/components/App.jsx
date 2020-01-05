import React, { Component } from "react";
import "./app.css"
import ChatContainer from "./ChatContainer/ChatContainer";
// import User from './User';


export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <User /> */}
                <ChatContainer />
            </React.Fragment>
        )
    }
}
