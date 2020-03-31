import SignUp from "./SignUp"
import SignIn from "./SignIn"
import React, { Component } from 'react';
import "./index.css";

class Index extends Component {

    render() {
        return (
            <div className="forms">
                <SignUp />
                <SignIn />
            </div>
        )
    }
}

export default Index;
