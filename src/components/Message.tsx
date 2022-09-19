import React from 'react';

function Message(props: {name: string}) {
    return (
        <div>
            <h2>My name {props.name}</h2>
        </div>
    );
}

export default Message;