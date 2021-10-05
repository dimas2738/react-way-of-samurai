import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs';
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

    let state=props.store.getState().dialogsPage;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs dialogsElements={state.dialogs}
                 messagesElements = {state.messages}
                 newMessageBody = {state.newMessageBody}
                 onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
        />
    )
}

export default DialogsContainer;