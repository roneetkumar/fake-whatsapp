import React, { Component } from "react";
import "./chat-container.css"
import ContactList from "./ContactList/ContactList";
import Display from "./Display/Display.jsx";
import Chatter from "./Chatter/Chatter";
// import { Route } from "react-router-dom";


export default class ChatContainer extends Component {

    state = {
        contact: {},
        currentUser: null
    }

    setCurrentUser(user) {
        this.setState({
            currentUser: user
        })
    }

    render() {
        return (
            <div className='chat-container'>
                <ContactList user={this.props.user} onChange={contact => this.setCurrentUser(contact)} />

                {
                    this.state.currentUser == null ?
                        (
                            // <Route exact path="/user">
                            <Display />
                            // </Route>
                        )
                        :
                        (
                            // <Route exact path={`/user/${this.state.currentUser.displayName}`} >
                            <Chatter contact={this.state.currentUser} />
                            // </Route>
                        )
                }
            </div >
        )
    }
}
