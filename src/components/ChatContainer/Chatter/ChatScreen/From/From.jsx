import React, { Component } from "react";
import "./from.css";

export default class From extends Component {
    render() {
        return (
            <div className="from">
                {
                    this.props.from.map((m, i) => <h1 key={i}>{m.content}</h1>)
                }
            </div>
        )
    }
}
