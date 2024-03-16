"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Flex, UIProvider, VStack, Text, Center, Spacer } from '@yamada-ui/react'

interface Room {
  id: number;
  room_name: string;
  created_at: string;
}

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      const response = await fetch('http://localhost:8000/api/rooms/');
      const data = await response.json();
      setRooms(data);
    }

    fetchRooms();
  }, []);

  return (
    <div>
      <UIProvider >
          <Flex>  
            <VStack className="main">
              <Center>
                <VStack className='main'>
                  <Text className="subtitle-text">
                    井戸一覧
                  </Text>
                  <ul className="subtitle-text">                    
                    {rooms.map((room: Room) => (
                      <li key={room.id}>
                        <Link href={`/rooms/${room.id}`}>
                          {room.room_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </VStack>
              </Center>
            </VStack>
          </Flex>
      </UIProvider>
    </div>
  )
}

export default RoomList