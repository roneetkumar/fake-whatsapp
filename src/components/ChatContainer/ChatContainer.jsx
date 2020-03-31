import React, { Component } from "react";
import "./chat-container.css"
import ContactList from "./ContactList/ContactList";
import Display from "./Display/Display.jsx";
import Chatter from "./Chatter/Chatter";
// import { Route } from "react-router-dom";
// import { firebase } from "firebase";
import { firestore } from "../Firebase"


export default class ChatContainer extends Component {

    state = {
        contact: {},
        currentUser: null,
        inputValue: "",
        contacts: [],
        to:""
    }

    componentDidMount() {
        this.getListUser()
    }

    getListUser = async () => {
        const result = await firestore.collection("users").get()
        if (result.docs.length > 0) {
            this.listUser = [...result.docs]

            this.listUser.forEach(contact => {
                this.setState({
                    contacts: [...this.state.contacts, {...contact.data(),id:contact.id}, ]
                })
            })

        }
    }

    // setCurrentUser = (user) => {
    //     this.setState({
    //         currentUser: user
    //     })
    // }

    inputHandler = input => {
        this.setState({
            inputValue: input
        })
    }

    render() {
        return (
            <div className='chat-container'>
                <ContactList
                    user={this.props.user}
                    contacts={this.state.contacts}
                    onChange={(contact, id) => this.setState({
                        currentUser: contact,
                        to:id
                    })}
                />

                {
                    this.state.currentUser == null ?
                        (
                            <Display />
                        )
                        :
                        (
                            <Chatter
                                contact={this.state.currentUser}
                                input={this.state.inputValue}
                                onChange={input => this.inputHandler(input)}
                                user={this.props.user}
                                to={this.state.to}
                            />
                        )
                }
            </div >
        )
    }
}
