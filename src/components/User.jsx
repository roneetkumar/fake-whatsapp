import React, { Component } from 'react';

import firebase from "./FireStore";
class User extends Component {


    state = {
        email: "",
        name: ""
    };

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
            name: this.state.name,
            email: this.state.email,
            pass: "1234"
        });

        this.setState({
            name: "",
            email: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.addUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.updateInput}
                    value={this.state.name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.updateInput}
                    value={this.state.email}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default User;
