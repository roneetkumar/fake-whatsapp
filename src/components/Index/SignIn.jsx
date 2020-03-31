import React, { Component } from 'react';
import FormInput from './FormInput'
import { auth } from "../Firebase"
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = async e => {

        e.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.props.history.push("/user");
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form className="signInForm" onSubmit={this.handleSubmit}>
                <h1>SIGN IN</h1>
                <FormInput
                    name='email'
                    type='email'
                    placeholder="email"
                    handleChange={this.handleChange}
                    value={this.state.email}
                    required

                />
                <FormInput
                    name='password'
                    type='password'
                    placeholder='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    required
                />
                {/* <button onClick={signInWithGoogle}> */}
                {/* button */}
                {/* </button> */}
                <button type="submit">
                    button
                </button>

            </form>
        )
    }
}

export default withRouter(SignIn)
