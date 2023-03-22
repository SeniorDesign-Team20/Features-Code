import React from "react";
import {Helmet} from "react-helmet";

function Chat(){
    return(
        <div>
            {/* Tab Name */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chat</title>
            </Helmet>

            <h1>This is the Chat page</h1>
        </div>
    );
}

export default Chat;
