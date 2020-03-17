import React, { Component } from "react";
import "./contact-list.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MessageIcon } from '../../../svg/message.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as StatusIcon } from '../../../svg/status.svg';
import ContactListItem from "./ContactListItem";
// import { firebase } from "firebase";
import { firestore } from "../../Firebase"



export default class ContactList extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.getListUser()
    }

    getListUser = async () => {
        const result = await firestore.collection("users").get()
        if (result.docs.length > 0) {
            this.listUser = [...result.docs]


            this.listUser.forEach(d => {
                this.setState({
                    contacts: [...this.state.contacts, d.data()]
                })
            })

        }


        // this.state.contacts.forEach(c => {
        //     console.log(c.messages[0].message)
        // })


        // console.log(this.state.contacts[2].messages[0].message);
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
