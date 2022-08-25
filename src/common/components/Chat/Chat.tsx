import React, {ChangeEvent, createRef, useEffect, useState} from 'react';
import style from './Chat.module.css';
import {Message} from '../Messages/Messages';
import {Navigate} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../../firebase/firebase';

type MessagesType = {
    userId: number
    userName: string
    message: string
    photo: string
}

export const Chat = () => {
    const [user] = useAuthState(auth);

    const [text, setText] = useState('');
    const [ws, setWS] = useState<WebSocket>();
    const [messages, setMessages] = useState<Array<MessagesType>>([]);

    const ref: React.RefObject<HTMLDivElement> = createRef();

    useEffect(() => {
        const localWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
        setWS(localWS);
    }, []);

    if (ws) {
        ws.onmessage = (messageEvent) => {
            const mess = JSON.parse(messageEvent.data);
            setMessages([...messages, ...mess]);
        }
    }

    const onSendMessage = () => {
        if (ws) {
            ws.send(text);
            setText('');
        }
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        })
    };

    const onTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.currentTarget.value);

    if (!user) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div style={{width: '320px', margin: '10px auto'}}>

            <div className={style.chat}>

                {messages && messages.map((m, i) => {
                        return <Message
                            ref={ref}
                            message={m.message}
                            name={m.userName}
                            photo={m.photo}
                            key={i}
                        />
                    }
                )}

            </div>
            <div className={style.footer}>
                <textarea onChange={onTextHandler} value={text}/>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>

    );
};



