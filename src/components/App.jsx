import React, { Component } from "react";
import "./app.css"
import ChatContainer from "./ChatContainer/ChatContainer";
import { Router, Switch, Route } from "react-router-dom";
import Index from './Index/Index';
import { auth, createUserProfileDocument } from "./Firebase"
import history from "./history";

export default class App extends Component {
    state = {
        user: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        user: { ...snapshot.data(), id:snapshot.id },
                    })
                })
            }
            this.setState({ user: userAuth })
        })


    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div className="HomePage">
                <Router basename={process.env.PUBLIC_URL} history={history}>
                    <Switch>
                        <Route exact path="/">
                            <Index />
                        </Route>
                        <Route path="/user">
                            <ChatContainer user={this.state.user} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
