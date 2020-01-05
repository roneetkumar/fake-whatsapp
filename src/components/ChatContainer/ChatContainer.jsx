import React, { Component } from "react";
import "./chat-container.css"
import ContactList from "./ContactList/ContactList";
import Display from "./Display/Display.jsx";
import Chatter from "./Chatter/Chatter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default class ChatContainer extends Component {

    state = {
        contact: {}
    }

    render() {

        return (
            <div className='chat-container'>
                <Router>
                    <ContactList
                        onChange={contact => this.setState({ contact })} />
                    <Switch>
                        <Route exact path="/">
                            <Display />
                        </Route>
                        <Route exact path={`/${this.state.contact.name}`} >
                            <Chatter contact={this.state.contact} />
                        </Route>
                    </Switch>
                </Router>
            </div >
        )
    }
}
