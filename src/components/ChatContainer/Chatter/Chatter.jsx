import React, { Component } from "react";
import ChatScreen from "./ChatScreen/ChatScreen";
import "./chatter.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as AttachIcon } from '../../../svg/attach.svg';
import { ReactComponent as EmojiIcon } from '../../../svg/emoji.svg';
import { ReactComponent as MicIcon } from '../../../svg/mic.svg';

import firebase from 'firebase'
import { firestore } from "../../Firebase"


export default class Chatter extends Component {

	state = {
		input: ""
	}


	onInputHandler = event => {
		var db = firestore.collection("users").doc(this.props.user.id);

		let temp = event.target.innerText.trim();

		if (event.key === 'Enter' && temp !== '') {

			this.setState({ input: temp })
			console.log("enter pressed");

			db.update({
				messages: firebase.firestore.FieldValue.arrayUnion({
					to: this.props.friend.id,
					time: new Date(),
					message: temp
				})
			}).then(() => {
				this.setState({ input: "" })
				console.log("Document successfully updated!");

				document.querySelector(".chat-screen").scrollTo(0, document.querySelector(".chat-screen").scrollHeight);


			}).catch(function (error) {
				console.error("Error updating document: ", error);
			});

		} else {
			console.log("key pressed");
		}
	}

	filterMyMessages = () => {
		return this.props.user.messages?.filter((message) => {
			return message.to === this.props.friend.id
		})
	}

	filterFriendMessages = () => {
		return this.props.friend.messages?.filter((message) => {
			return message.to === this.props.user.id
		})
	}

	setMessages = () => {
		let temp = [...this.filterMyMessages(), ...this.filterFriendMessages()];

		temp.sort((a, b) =>  a.time.seconds - b.time.seconds)

		return temp;
	}


	render() {
		return (
			<div className="chatter">
				<header>
					<img src="https://thispersondoesnotexist.com/image" alt="img" />
					<h1 className="name">
						{this.props.friend.displayName}
					</h1>
					<SearchIcon title="Search" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<AttachIcon title="Attach" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<MenuIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
				</header>

				<ChatScreen myMessages={this.setMessages()} id={this.props.user.id} />

				<form>
					<EmojiIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
					<div className="input-wrapper">
						<div className="input"
							contentEditable="true"
							placeholder="Type a message"
							onKeyUp={this.onInputHandler}
						>{this.state.input}</div>
					</div>
					<MicIcon title="Menu" fill="rgba(0,0,0,0.4)" height="24px" width="24px" />
				</form>
			</div>
		)
	}
}
