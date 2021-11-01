import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs,
        messagesElements: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isLogin:state.auth.isLogin
    };

}



let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (body) => dispatch(updateNewMessageBodyCreator(body)),

    };
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;