import React, { Component } from "react";
import "./chat-container.css"
import ContactList from "./ContactList/ContactList";
import Display from "./Display/Display.jsx";
import Chatter from "./Chatter/Chatter";
import { Route } from "react-router-dom";


export default class ChatContainer extends Component {

    state = {
        contact: {}
    }

    render() {
        return (
            <div className='chat-container'>

                {/* <Route path="/user"> */}
                <ContactList onChange={contact => this.setState({ contact })} />
                {/* <Index /> */}
                {/* </Route> */}
                <Route exact path="/user">
                    <Display />
                </Route>

                <Route exact path={`/user/${this.state.contact.name}`} >
                    <Chatter contact={this.state.contact} />
                </Route>

            </div >
        )
    }
}
