import React from 'react';

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {Redirect} from "react-router-dom";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs,
        messagesElements: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    };

}



let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onNewMessageChange: (body) => dispatch(updateNewMessageBodyCreator(body)),

    };
}


// let AuthRedirectComponent =WithAuthRedirectComponent(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent)(Dialogs);