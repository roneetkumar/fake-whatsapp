import React, { Component } from "react";
import "./contact-list-item.css"
// import { Link } from "react-router-dom";

export default class ContactListItem extends Component {
    render() {
        return (
            <div
                className="contact-list-item"
                onClick={() => this.props.onChange()}>
                <img
                    src="https://thispersondoesnotexist.com/image" alt="img" />
                <div className="info-wrapper">
                    <h3>
                        {this.props.contact.displayName}
                    </h3>
                    <h5>
                        {`${new Date(this.props.contact.messages[0]?.time.seconds * 1000).toDateString()}`}
                    </h5>
                    <span>{`${new Date(this.props.contact.messages[0]?.time.seconds * 1000).toLocaleTimeString()}`}</span>
                    <span></span>
                </div>
            </div>
        )
    }
}
