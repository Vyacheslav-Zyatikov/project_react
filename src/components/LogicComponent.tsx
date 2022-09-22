import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const chatsList = [
    { id: 1, name: 'Балаболка' },
    { id: 2, name: 'Первачёк'},
    { id: 3, name: 'Колхозник' },
    { id: 4, name: 'Первый на деревне' }
];


const LogicComponent: () => JSX.Element = () => {
    return (
        <List>
            {chatsList.map((chat: { id:number; name: string;}) =>{
                return(
                    <ListItem disablePadding key={chat.id}>
                        <ListItemButton>
                            <ListItemText primary={`${chat.name}`} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    );
};

export default LogicComponent;