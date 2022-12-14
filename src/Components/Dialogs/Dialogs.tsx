import s from './Dialogs.module.css'
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";

import React, {ChangeEvent} from 'react'
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsItem = props.dialogs.map(el => <DialogItem ava={el.ava} key={el.id} name={el.name}
                                                                          id={el.id}/>);
    let messagesItem = props.messages.map(el =>
        <MessageItem key={el.id} message={el.message}/>
    );

    const onClickHandler = () => {
        props.addMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessage(e.currentTarget.value)
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsItem}
                </div>
                <div className={s.messagesItems}>
                     <div>{messagesItem}</div>
                    <textarea onChange={onChangeHandler} value={props.newMessageText}></textarea>
                    <button onClick={onClickHandler}>add</button>
                </div>
            </div>
    )
}


export default Dialogs