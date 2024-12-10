import { useState, useEffect, useCallback } from 'react';
import { useChatContext } from '../../contexts/ChatContext';
import { getChatList } from '../../apis';
import { ChatItem } from '../../interfaces/interfaces';
import {
  chatListContainerStyles,
  headerStyles,
  buttonStyles,
  chatListStyles,
  searchInputStyles,
} from './ChatListStyles';
import { ChatCard } from './ChatCard/ChatCard';
import closeSide from './../../../assets/closeSide.svg';
import newChat from './../../../assets/newChat.svg';

export const ChatList: React.FC = () => {
  const { selectChat, selectedChatId, addChat, clickAddChat, selectModel } = useChatContext();

  const [chatList, setChatList] = useState<ChatItem[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchChatList = async () => {
      const list = await getChatList();
      if (list) {
        setChatList(list);
      }
    };
    fetchChatList();
  }, [addChat]);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const handleCardClick = useCallback(
    (chatId: string, modelId: string) => {
      selectChat(chatId);
      selectModel(modelId);
    },
    [selectChat, selectModel],
  );

  const handleNewClick = useCallback(() => {
    clickAddChat;
    selectModel('');
    selectChat('');
  }, [clickAddChat, selectChat, selectModel]);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredChatList = chatList.filter(
    (item) =>
      item.chat_model_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.dialogues[0]?.prompt || '').toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div css={chatListContainerStyles(isCollapsed)}>
      <div css={headerStyles}>
        <button css={buttonStyles} onClick={toggleCollapse}>
          <img src={isCollapsed ? closeSide : closeSide} alt="Toggle Sidebar" />
        </button>
        {!isCollapsed && (
          <>
            <input
              type="text"
              css={searchInputStyles}
              placeholder="Search Models or First Chat..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </>
        )}
        <button css={buttonStyles} onClick={handleNewClick}>
          <img src={newChat} alt="New Chat" />
        </button>
      </div>
      {!isCollapsed && (
        <div css={chatListStyles(isCollapsed)}>
          {filteredChatList.map((item) => (
            <div key={item.chat_id}>
              <ChatCard
                isSelected={selectedChatId === item.chat_id}
                modelName={item.chat_model_name}
                firstQuestion={item.dialogues[0]?.prompt || ''}
                onClick={() => handleCardClick(item.chat_id, item.chat_model_id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
