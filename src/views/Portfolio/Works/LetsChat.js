import React from 'react';
import WorkDetails from './WorkDetails';

function LetsChat (props) {
    return (
        <div>
            <WorkDetails 
                title="Let's Chat"
                gif="letschat.gif"
                gifName="let's chat gif"
                description="A responsive, real-time Messaging Web Application."
                github="https://github.com/echosit/Lets-Chat"
                site="https://lets-chat-app.netlify.app/"
                technologies="ReactJS, NodeJS, Socket.IO"
                li1="Allows users to create and join chat rooms, as well as, message in real-time"
                li2="Users in existing chat rooms are notified when other users enter or leave the chat"
                hide="hide"
            />
        </div>
    );
}

export default LetsChat;