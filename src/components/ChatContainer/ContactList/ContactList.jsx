import React, { Component } from "react";
import "./contact-list.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MessageIcon } from '../../../svg/message.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as StatusIcon } from '../../../svg/status.svg';
import ContactListItem from "./ContactListItem";


export default class ContactList extends Component {

    render() {
        return (
            <div className='contact-list-container'>
                <header>
                    <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                    <h5>{this.props.user?.displayName}</h5>
                    <StatusIcon title="Status" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
                    <MessageIcon title="Message" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
                    <MenuIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
                </header>
                <div className="search-container">
                    <div className="search">
                        <SearchIcon fill="rgba(0,0,0,0.2)" height="18px" width="18px" />
                        <input type="text" placeholder="Search or start new chat" />
                    </div>
                </div>

                <div className="contact-list-items" >
                    {
                      this.props.contacts.map((contact, i) => <ContactListItem
                            onChange={(friend) => this.props.onChange(friend)}
                            key={i} contact={contact}
                        />)
                    }
                </div>
            </div>
        )
    }
}
