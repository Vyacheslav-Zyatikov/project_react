import React, { useState } from 'react';
import {Link} from "react-router-dom";

const ChatsPage = () => {
    const [chatsList, setChatsList] = useState<any>([
        {id: 1, name: 'Балаболка'},
        {id: 2, name: 'Первачёк'},
        {id: 3, name: 'Колхозник'},
        {id: 4, name: 'Первый на деревне'}
    ]);

    const [name, setName] = useState('');

    const chatDelete = (id: any) => {
        const filtered = chatsList.filter((chat: any) => chat.id !== id);
        setChatsList(filtered);
    }

    const chatAdd = () => {
        const objLength:number = chatsList.length+1;
        const obj = {
            id: objLength,
            name: name
        }
        setChatsList((prevState:any) => [...prevState, obj]);
    }
    return (
        <>
            <div className="App-chats">
                <div className="App-leftSidebar">
                    {chatsList.map((chat: { id: number; name: string; }) => {
                        return (
                            <div className={'chatLink'} key={chat.id}>
                                <Link to={`/chats/${chat.id}`}>
                                    {chat.name}
                                </Link>
                                <button onClick={() => chatDelete(chat.id)}>X</button>
                            </div>
                        )
                    })}
                </div>
                <div className="App-chatsContent">
                    <h3 className="App-chatsContent-h3">Вы можете выбрать понравившийся чат или создать свой.</h3>
                    <div className="App-chatsContent-form">
                        <input value={name} onChange={(e) => setName(e.target.value)}/>
                        <button onClick={chatAdd}>Добавить чат</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatsPage;