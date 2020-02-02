import SignUp from "./SignUp"
import SignIn from "./SignIn"
import React, { Component } from 'react';

class Index extends Component {

    render() {
        return (
            <React.Fragment >

                <SignUp />
                <SignIn />
            </React.Fragment >
        )
    }
}

export default Index;
