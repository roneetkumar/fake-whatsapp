import React, { Component } from "react";
import "./display.css"
import { ReactComponent as MacIcon } from '../../../svg/mac.svg';

export default class Display extends Component {
    render() {
        return (
            <div className="display-wrapper">
                <img
                    src="https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="img"
                />
                <h1>Keep your phone connected</h1>
                <h4>WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</h4>
                <div className="link">
                    <MacIcon fill="rgba(0,0,0,0.3)" height="18px" width="18px" />
                    <span>WhatsApp is available for Windows. <a href="https://www.whatsapp.com/download" >Get it here</a> </span>
                </div>
            </div>
        )
    }
}
