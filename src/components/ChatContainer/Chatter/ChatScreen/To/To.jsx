import React, { Component } from "react";
import "./to.css"

export default class To extends Component {
    render() {
        return (
            <div className="to">
                {
                    this.props.to.map((m, i) => <h1 key={i}>{m.content}</h1>)
                }
            </div>
        )
    }
}
