import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Avatar, Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import './Chat.css';

const Chat = ({ socket, room }) => {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                message: currentMessage,
                ID: socket.id,
                time:
                    new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);

            // input field empty
            const inputValue = document.getElementById('inputValue');
            inputValue.value = '';
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <Box>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        py: 4,
                        px: 2,
                        boxShadow: '10px 10px 10px #f8ecec'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',

                        }}
                    >
                        <Avatar src='' />
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '20px',
                                    pl: 2
                                }}
                                variant='h5'
                            >
                                User name
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#eff1f2',
                                color: '#223645',
                            }}
                        ><i class="fa-solid fa-phone"></i></Typography>
                        <Typography
                            sx={{
                                mx: 3,
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#eff1f2',
                                color: '#223645',
                            }}
                        ><i class="fa-solid fa-video"></i></Typography>
                        <Typography
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#eff1f2',
                                color: '#223645',
                            }}
                        ><i class="fa-solid fa-ellipsis-vertical"></i></Typography>
                    </Box>
                </Box>
                <Box sx={{
                    height: '530px',
                    overflowY: 'scroll'
                }}>
                    {
                        messageList.map((messageContent) => {
                            return (
                                <Box
                                    id={socket.id === messageContent?.ID ? 'you' : 'other'}
                                >
                                    <Typography
                                        sx={{
                                            display: 'inline-block',
                                            borderRadius: '10px',
                                            fontSize: '18px',
                                            mt: 2,
                                            py: 1,
                                            px: 2
                                        }}
                                    >
                                        {messageContent?.message}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '12px', px: 1, }}
                                    >
                                        {messageContent.time}</Typography>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box>
                    <Paper
                        sx={{
                            px: 3,
                            py: 4,
                            display: 'flex',
                            alignItems: 'center',
                            bottom: 3,
                        }}
                    >
                        <Typography
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#eff1f2',
                                color: '#223645',
                            }}
                        >
                            <i class="fa-solid fa-circle-plus"></i>
                        </Typography>
                        <InputBase
                            id="inputValue"
                            sx={{ ml: 2, flex: 1 }}
                            placeholder="Write your message..."
                            onChange={(event) => setCurrentMessage(event.target.value)}
                            onKeyPress={(event) => {
                                event.key === "Enter" && sendMessage();
                            }}
                        />
                        <Typography
                            sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: '#eff1f2',
                                color: '#223645',
                            }}
                            onClick={sendMessage}
                        >
                            <i class="fa-solid fa-paper-plane"></i>
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default Chat;