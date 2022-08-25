import React, {ChangeEvent, useState} from 'react';
import {Avatar, Button, Container, Grid, TextField} from '@mui/material';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import {Loader} from '../Loader/Loader';
import {addDoc, auth, collection, db, firebase} from '../../../firebase/firebase';

export const ChatFirebase = () => {
    const [user] = useAuthState(auth);
    const [text, setText] = useState('');
    const [messages, loading] = useCollectionData(
        collection(db, 'messages')
    );

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    };

    const sendMessage = async () => {
        await addDoc(collection(db, 'messages'),
            {
                uid: user?.uid,
                displayName: user?.displayName,
                photoURL: user?.photoURL,
                text: text,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        setText('');
    };

    if (!user) {
        return <Navigate to={'/login'}/>
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 80, marginTop: '10px'}}
                  justifyContent="center"
            >
                <div style={{width: '80%', overflowY: 'auto', border: '1px solid grey', height: '70vh'}}>
                    {messages?.map((m, i) =>
                        <div key={i} style={{
                            border: user?.uid === m.uid ? '2px solid green' : '2px solid purple',
                            marginLeft: user?.uid === m.uid ? '75%' : '3%',
                            width: 'fit-content',
                            marginTop: '10px'
                        }}>
                            <Grid container>
                                <Avatar src={m.photoURL}/>
                                <div>{m.displayName}</div>
                            </Grid>
                            <div>{m.text}</div>
                        </div>
                    )}
                </div>
                <Grid container
                      direction="column"
                      alignItems={"end"}
                      style={{width: '80%'}}
                >
                    <TextField
                        margin={"normal"}
                        color={"secondary"}
                        fullWidth
                        value={text}
                        onChange={onChangeHandler}
                    />

                    <Button
                        size={"large"}
                        variant={"outlined"}
                        color={"secondary"}
                        onClick={sendMessage}
                    >Send
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

