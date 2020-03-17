import React, { Component } from "react";
import ChatScreen from "./ChatScreen/ChatScreen";
import "./chatter.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as AttachIcon } from '../../../svg/attach.svg';
import { ReactComponent as EmojiIcon } from '../../../svg/emoji.svg';
import { ReactComponent as MicIcon } from '../../../svg/mic.svg';

import { firebase } from 'firebase'

import { firestore } from "../../Firebase"


export default class Chatter extends Component {

	onInputHandler = (event) => {
		var db = firestore.collection("users").doc("G9aeSPCcbgVS6RfJO84mitrubtw2");


		if (event.key === 'Enter' && event.target.innerText.trim() !== '') {
			console.log("enter pressed");

			db.set({
				messages: firebase.firestore.FieldValue.arrayUnion({
					to: "roop",
					time: "ds",
					message: event.target.innerText
				})

			}).then(() => {
				console.log("Document successfully updated!");

			}).catch(function (error) {
				console.error("Error updating document: ", error);
			});


		} else {
			console.log("key pressed");

		}
	}

	render() {
		return (
			<div className="chatter">
				<header>
					<img src="https://thispersondoesnotexist.com/image" alt="img" />
					<h1 className="name">
						{this.props.contact.displayName}
					</h1>
					<SearchIcon title="Search" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<AttachIcon title="Attach" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<MenuIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
				</header>
				<ChatScreen messages={this.props.contact.messages} />
				<form>
					<EmojiIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<div className="input-wrapper">
						<div className="input"
							contentEditable="true"
							type="text"
							placeholder="Type a message"
							onKeyPress={this.onInputHandler}
						></div>
					</div>
					<MicIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
				</form>
			</div>
		)
	}
}
