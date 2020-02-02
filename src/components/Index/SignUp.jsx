import React, { Component } from 'react';
import FormInput from "./FormInput"
import { auth, createUserProfileDocument } from "../Firebase"
import { withRouter } from 'react-router-dom';


class SignUp extends Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("password dont match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName });
            this.props.history.push("/user");
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            })

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='displayName'
                    type='text'
                    placeholder='Name'
                    onChange={this.handleChange}
                    value={displayName}
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={this.handleChange}
                    value={email}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={this.handleChange}
                    value={password}
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={this.handleChange}
                    value={confirmPassword}
                    required
                />

                <button type="submit">SignUp</button>
            </form>
        )
    }
}

export default withRouter(SignUp)


