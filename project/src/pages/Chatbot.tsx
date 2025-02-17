import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { ChatMessage } from '../components/Chatbot/ChatMessage';
import { ChatInput } from '../components/Chatbot/ChatInput';
import { ImageUpload } from '../components/Chatbot/ImageUpload';
import { Brain, Sparkles } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  image?: string;
}

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hello! I'm your AI trading assistant. I can help you analyze charts, provide market insights, and answer your trading questions. You can also share images of charts for analysis.", 
      isBot: true 
    }
  ]);

  const handleSendMessage = (message: string) => {
    setMessages(prev => [...prev, { text: message, isBot: false }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'm analyzing your request. This is a demo response that would normally contain AI-generated insights.",
        isBot: true
      }]);
    }, 1000);
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setMessages(prev => [...prev, {
        text: "I've uploaded a chart for analysis",
        isBot: false,
        image: imageUrl
      }]);
      
      // Simulate bot response to image
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I've analyzed the chart pattern. This appears to be a bullish trend with key resistance levels at...",
          isBot: true
        }]);
      }, 1500);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Card className="relative h-[calc(100vh-12rem)]">
      <div className="absolute top-0 left-0 right-0 p-4 glass z-10">
        <div className="flex items-center space-x-2">
          <Brain className="w-6 h-6 text-accent-primary" />
          <h2 className="text-lg font-semibold text-white">AI Trading Assistant</h2>
          <span className="flex items-center px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            Pro
          </span>
        </div>
      </div>

      <div className="flex flex-col h-full pt-16">
        <div className="flex-1 overflow-y-auto space-y-4 p-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg} />
          ))}
        </div>

        <div className="p-4 glass">
          <div className="flex items-center space-x-2">
            <ImageUpload onImageSelect={handleImageUpload} />
            <div className="flex-1">
              <ChatInput onSend={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};