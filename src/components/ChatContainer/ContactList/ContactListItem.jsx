import React, { Component } from "react";
import "./contact-list-item.css"
import { Link } from "react-router-dom";

export default class ContactListItem extends Component {



    render() {
        return (
            <Link to={this.props.contact.name.toLowerCase()}>
                <div
                    className="contact-list-item"
                    onClick={() => this.props.onChange()}>
                    <img
                        src="https://thispersondoesnotexist.com/image" alt="img" />
                    <div className="info-wrapper">
                        <h3>
                            {this.props.contact.name}
                        </h3>
                        <h5>
                            {this.props.contact.messages[0].content}
                        </h5>
                        <span>span1</span>
                        <span>span2</span>
                    </div>
                </div>
            </Link>
        )
    }
}
