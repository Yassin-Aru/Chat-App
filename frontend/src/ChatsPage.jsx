import React from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

function ChatsPage(props) {
    const chatProps = useMultiChatLogic(
        'ed72b70c-785a-4d36-97c9-1d15a25a1720',
        props.user.username,
        props.user.secret
    );


    return (
        <div style={{height: "100vh"}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} />
        </div>
    )
}

export default ChatsPage;