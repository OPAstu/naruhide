import React, { useEffect, useState } from 'react';
import { ref, set, push, child, get, onValue, getDatabase, update } from 'firebase/database';
import {
    Box,
    Typography,
    IconButton,
    Input,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    Stack
} from '@mui/material';
import {
    Chat, Send
} from '@mui/icons-material';
import { database } from '../firebase/initialize';

export default function RoomScreen() {
    const [localStream, setLocalStream] = useState(null);
    const [callButtonDisabled, setCallButtonDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const peersRef = ref(database, 'rooms');

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                setLocalStream(stream);

                /*
                const peerRef = push(peersRef);
                // peerRef.onDisconnect().remove();

                const peerConnection = new RTCPeerConnection();
                stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

                peerConnection.onicecandidate = event => {
                    if (event.candidate) {
                        child(peersRef, 'candidates').push(event.candidate.toJSON());
                    }
                };

                peerConnection.createOffer()
                    .then(offer => peerConnection.setLocalDescription(offer))
                    .then(() => {
                        set(peersRef, { offer: peerConnection.localDescription.toJSON() });
                    });
                
                peerRef.on('value', snapshot => {
                    const data = snapshot.val();
                    if (data && data.answer) {
                        const answerDescription = new RTCSessionDescription(data.answer);

                        peerConnection.setRemoteDescription(answerDescription);
                    }
                });

                peerRef.child("candidates").on('child_added', snapshot => {
                    if (snapshot.val()) {
                        const candidate = new RTCIceCandidate(snapshot.val());

                        peerConnection.addIceCandidate(candidate);
                    }
                });
                */
            })
            .catch(error => {
                console.error('Error accessing media devices:', error);
            });
    }, []);

    const chatMessages = () => {

    };

    function sendChatMessage() {
        const db = getDatabase();
        const newChatKey = push(child(ref(db), 'chats')).key;
        const updates = {};
        const data = {
            message: message
        }
        updates['/chats/' + newChatKey] = data;

        update(ref(db), updates);
        /*
        const dbRef = ref(database);
        get(child(dbRef, "rooms/chats")).then((snapshot) => {
            if (snapshot.exists()) {
                push(peersRef, { chats: message });
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        */
    };

    return (
        <Box sx={{
            maxWidth: 1000,
            mx: 'auto',
            my: 5
        }}>
            <Box>
            </Box>
            <Box>
                <Stack direction="row">
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField
                            id="input-with-icon-textfield"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Chat />
                                    </InputAdornment>
                                ),
                                label: "chat message"
                            }}
                            variant="standard"
                            onChange={text => setMessage(text.target.value)}
                        />
                    </FormControl>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={ev => sendChatMessage()}
                    >
                        <Send />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    )
}