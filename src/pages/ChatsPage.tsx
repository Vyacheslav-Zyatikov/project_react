import React, {useEffect, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import Message from "../components/Message";
import LogicComponent from "../components/LogicComponent";

const ChatsPage = () => {
    const [messageList, setMessageList] = useState<any>([]);
    const [text, setText] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setMessageList((prevState: any[]) => [...prevState, {
            id: giveLastId(prevState),
            text: text,
            author: author
        }])
    }

    function giveLastId(array: any[]) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
    function botAnswer(): void {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMessageList((prevState: any[]) => [
                    ...prevState, {
                        id: giveLastId(prevState),
                        text: `Сообщение автора ${lastAuthor.author} отправлено`
                    }
                ]
            )
            setText('')
            setAuthor('')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            botAnswer();
        }, 1500)
    }, [botAnswer, messageList])
    return (
        <>
            <div className="App-chats">
                <div className="App-leftSidebar">
                    <LogicComponent/>
                </div>
                <div className="App-mainContent">
                    <Box component="form" className="form" onSubmit={handleSubmit}>
                        <TextField className="form-input" autoFocus={true} value={text}
                                   onChange={(e) => setText(e.target.value)} placeholder={"Введите сообщение"}
                                   variant="outlined"/>
                        <TextField className="form-input" value={author} onChange={(e) => setAuthor(e.target.value)}
                                   placeholder={"Кто вы?"} variant="outlined"/>
                        <Button className="form-button" type='submit' variant="outlined">Добавить сообщение</Button>
                    </Box>
                    {messageList.map((message: { id: number; text: string; author: string; }) => {
                        return (
                            <Message key={message.id} text={message.text} author={message.author}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default ChatsPage;