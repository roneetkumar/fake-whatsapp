import React, { Component } from "react";
import "./app.css"
import ChatContainer from "./ChatContainer/ChatContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Index } from './Index/Index';
import { auth, createUserProfileDocument } from "./Firebase"


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
                        user: { ...snapshot.data() }
                    })
                })
            }
            this.setState({ user: userAuth })
        })

        if (this.state.user) this.props.history.push('/user')
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <React.Fragment>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/">
                            <Index />
                        </Route>
                        <Route path="/user">
                            <ChatContainer />
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
}
