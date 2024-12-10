import { createContext, useContext, useState, ReactNode } from 'react';
import { ChatContextType } from '../interfaces/interfaces';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChatId, setSelectedChatId] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('');
  const [addChat, setAddChat] = useState<number>(0);

  const selectChat = (id: string) => {
    setSelectedChatId(id);
  };
  const selectModel = (id: string) => {
    setSelectedModelId(id);
  };
  const clickAddChat = () => {
    setAddChat((prev) => prev + 1);
  };
  return (
    <ChatContext.Provider
      value={{ selectedChatId, selectChat, addChat, clickAddChat, selectedModelId, selectModel }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
