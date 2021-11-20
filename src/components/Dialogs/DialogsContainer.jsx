import React from 'react';

import {sendMessageCreator} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs,
        messagesElements: state.dialogsPage.messages,
    };

}



let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (message) => dispatch(sendMessageCreator(message)),

    };
}






export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent)(Dialogs);