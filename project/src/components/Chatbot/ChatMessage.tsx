import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: {
    text: string;
    isBot: boolean;
    image?: string;
  };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex items-start space-x-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}>
      {message.isBot && (
        <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div className={`glass max-w-[80%] p-3 rounded-xl ${message.isBot ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
        {message.image && (
          <img 
            src={message.image} 
            alt="Uploaded content"
            className="rounded-lg mb-2 max-w-full h-auto"
          />
        )}
        <p className="text-white whitespace-pre-wrap">{message.text}</p>
      </div>
      {!message.isBot && (
        <div className="w-8 h-8 rounded-full bg-accent-secondary flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};