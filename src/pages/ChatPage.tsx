import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import Message from "../components/Message";
import {useParams} from "react-router-dom";
import {messages} from "../Contexts/MessageContext";

const ChatPage = () => {

    const [text, setText] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const { chatId } = useParams();
    const getMessage = (chatId: any) => {
        return messages.filter((chat) => chat.chatId === chatId);
    }
    // function filterItems( searchVal) {
    //     return messages.filter((chat) => Object.values(messages).includes(chatId));
    // }

    const [messageList, setMessageList] = useState<any>(getMessage(chatId));
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setMessageList((prevState: any[]) => [...prevState, {
            id: giveLastId(prevState),
            text: text,
            author: author,
            chatId: chatId
        }])
        setText('')
        setAuthor('')
    }

    function giveLastId(array: any[]) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    return (
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
    );
};

export default ChatPage;