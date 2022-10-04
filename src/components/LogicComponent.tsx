import React, {useState} from 'react';
import {Link} from "react-router-dom";

const LogicComponent: () => JSX.Element = () => {
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
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={chatAdd}>Добавить чат</button>
            </div>
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
        </>
    );
};

export default LogicComponent;