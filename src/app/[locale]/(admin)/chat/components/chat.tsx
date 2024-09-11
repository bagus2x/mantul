'use client'

import { Send, Users } from 'lucide-react'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@mantul/components/ui/avatar'
import { Button } from '@mantul/components/ui/button'
import { Input } from '@mantul/components/ui/input'
import { ScrollArea } from '@mantul/components/ui/scroll-area'

// Mock data
const conversations = [
  { id: 1, name: 'Alice', type: 'private', lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Bob', type: 'private', lastMessage: 'Did you see the game last night?' },
  { id: 3, name: 'Work Group', type: 'group', lastMessage: 'Meeting at 3 PM' },
  { id: 4, name: 'Family', type: 'group', lastMessage: "Who's cooking dinner tonight?" },
]

const messages = [
  { id: 1, sender: 'Alice', content: 'Hey, how are you?', timestamp: '10:00 AM' },
  { id: 2, sender: 'You', content: "I'm good, thanks! How about you?", timestamp: '10:05 AM' },
  {
    id: 3,
    sender: 'Alice',
    content: 'Doing well! Any plans for the weekend?',
    timestamp: '10:10 AM',
  },
]

interface Conversation {
  id: number
  name: string
  lastMessage: string
  type: string
}

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

export const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(conversations[0])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar
        conversations={conversations}
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
      />
      <div className='flex flex-1 flex-col'>
        <MessageHeader selectedConversation={selectedConversation} />
        <MessageList messages={messages} />
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  )
}

const Sidebar: React.FC<{
  conversations: Conversation[]
  selectedConversation: Conversation
  onSelectConversation: (conversation: Conversation) => void
}> = ({ conversations, selectedConversation, onSelectConversation }) => {
  return (
    <div className='w-1/4 border-r bg-white'>
      <div className='border-b p-4'>
        <h2 className='text-xl font-semibold'>Conversations</h2>
      </div>
      <ScrollArea className='h-[calc(100vh-5rem)]'>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`cursor-pointer p-4 hover:bg-gray-100 ${
              selectedConversation.id === conversation.id ? 'bg-gray-200' : ''
            }`}
            onClick={() => onSelectConversation(conversation)}>
            <div className='flex items-center'>
              <Avatar className='h-10 w-10'>
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${conversation.name}`}
                />
                <AvatarFallback>{conversation.name[0]}</AvatarFallback>
              </Avatar>
              <div className='ml-4'>
                <p className='font-semibold'>{conversation.name}</p>
                <p className='text-sm text-gray-500'>{conversation.lastMessage}</p>
              </div>
              {conversation.type === 'group' && <Users className='ml-auto h-5 w-5 text-gray-400' />}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

const MessageHeader: React.FC<{ selectedConversation: Conversation }> = ({
  selectedConversation,
}) => {
  return (
    <div className='border-b bg-white p-4'>
      <h2 className='text-xl font-semibold'>{selectedConversation.name}</h2>
    </div>
  )
}

const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <ScrollArea className='flex-1 p-4'>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
          <div
            className={`inline-block rounded-lg p-2 ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            <p>{message.content}</p>
            <p className='mt-1 text-xs opacity-70'>{message.timestamp}</p>
          </div>
        </div>
      ))}
    </ScrollArea>
  )
}

const MessageInput: React.FC<{
  newMessage: string
  setNewMessage: (message: string) => void
  handleSendMessage: (e: React.FormEvent) => void
}> = ({ newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <form onSubmit={handleSendMessage} className='bg-white p-4'>
      <div className='flex items-center'>
        <Input
          type='text'
          placeholder='Type a message...'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className='mr-2 flex-1'
        />
        <Button type='submit'>
          <Send className='h-5 w-5' />
          <span className='sr-only'>Send</span>
        </Button>
      </div>
    </form>
  )
}
