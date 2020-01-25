import React, { Component } from 'react';
import FormInput from './FormInput'

export default class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => console.log(this.state)
        )
    }

    handleForm = (e) => {
        e.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleForm}>
                <h1>index</h1>
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
