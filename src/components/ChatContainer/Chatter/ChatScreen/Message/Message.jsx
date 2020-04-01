import React, { Component } from "react";
import "./message.css"


export default class Message extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`message ${this.props.className}`} >
                    <h1>{this.props.message.message}
                        <span>
                            {
                                // `${new Date(this.props.message?.time.seconds * 1000).toDateString()}
                                `${new Date(this.props.message?.time.seconds * 1000).toLocaleTimeString().split(':').slice(0, 2).join(":")}`
                            }
                        </span>
                    </h1>
                </div>
            </React.Fragment>
        )
    }
}
