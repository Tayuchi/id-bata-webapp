"use client"

import React, { useEffect, useState } from 'react';

const MyComponent: React.FC = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/messages');
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <ul>
                {messages.map((message: any) => (
                    <li key={message.id}>{message.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;