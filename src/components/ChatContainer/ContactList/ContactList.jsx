import React, { Component } from "react";
import "./contact-list.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MessageIcon } from '../../../svg/message.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as StatusIcon } from '../../../svg/status.svg';
import ContactListItem from "./ContactListItem";


export default class ContactList extends Component {

    state = {
        contacts: [
            {
                name: "Joey Tribbiani",
                messages: [
                    {
                        date: "12/2/2020",
                        time: "12:20 PM",
                        content: "hodor hodor Hodor!"
                    },
                    {
                        date: "12/2/2020",
                        time: "12:20 PM",
                        content: "hoDOR hodor"
                    },
                    {
                        date: "12/2/2020",
                        time: "12:20 PM",
                        content: "hooooDor"
                    },
                    {
                        date: "12/2/2020",
                        time: "12:20 PM",
                        content: "hhooodoor ! hodor!"
                    }
                ]
            }, {
                name: "Phoebe Buffay",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Monica Geller",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Rachel Green",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Chandler Bing",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Ross Geller",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Janice Hosenstein",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Gunther",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "Ben Geller",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            },
            {
                name: "Mr. Heckles",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            },
            {
                name: "roops",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "vinays",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "shivams",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sunils",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sharmas",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            },

        ]
    }

    clickHandler = (contact) => this.props.onChange(contact)

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
                        this.state.contacts.map((contact, i) => <ContactListItem
                            onChange={() => this.clickHandler(contact)}
                            key={i} contact={contact}
                        />)
                    }
                </div>
            </div>
        )
    }
}
