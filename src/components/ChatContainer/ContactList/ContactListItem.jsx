import React, { Component } from "react";
import "./contact-list-item.css"

export default class ContactListItem extends Component {
    render() {
        return (
            <div
                className="contact-list-item"
                onClick={() => this.props.onChange(this.props.contact.id)}>
                <img src="https://thispersondoesnotexist.com/image" alt="img" />
                <div className="info-wrapper">
                    <h3>
                        {this.props.contact.displayName}
                    </h3>
{/*
                    {

                        (this.props.contact.messages.length !== 0) ?
                            <h5>{`${new Date(this.props.contact.messages[0].time.seconds * 1000).toDateString()}`}</h5> :""

                    }

                    {
                        (this.props.contact.messages.length !== 0) ?
                            <span>{`${new Date(this.props.contact.messages[0].time.seconds * 1000).toLocaleTimeString()}`}</span>: ""

                    } */}
                    <span></span>
                </div>
            </div>
        )
    }
}
