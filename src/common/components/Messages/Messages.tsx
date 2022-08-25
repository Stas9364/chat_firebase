import React, {ForwardedRef, forwardRef} from 'react';
import style from '../Chat/Chat.module.css';

type MessagePropsType = {
    name: string
    message: string
    photo: string
}

export const Message = forwardRef((props: MessagePropsType, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={style.messages} ref={ref}>
            <div className={style.message}>
                <img src={props.photo} alt="avatar"/>
                <div className={style.textBlock}>
                    <b>{props.name}</b>
                    <span>{props.message}</span>
                </div>
            </div>
        </div>
    )
});