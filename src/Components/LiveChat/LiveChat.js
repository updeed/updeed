import { Box, Button } from "@mui/material";
import { useState } from "react";
import io from "socket.io-client";
import Chat from "../Chat/Chat";
const socket = io.connect("http://localhost:4000");


const LiveChat = () => {

    const [room] = useState("updeed");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        socket.emit("join_room", room);
        setShowChat(true);
    };

    return (
        <Box>
            {
                !showChat ?
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh'
                        }}
                    >
                        <Button
                            sx={{ fontSize: '40px', }}
                            onClick={joinRoom}
                        ><i class="fa-solid fa-comment-dots"></i></Button>
                    </Box> :
                    <Chat socket={socket} room={room} />
            }
        </Box>
    );
};

export default LiveChat;