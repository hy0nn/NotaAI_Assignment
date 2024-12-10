import { ChatList } from './ChatList/ChatList';
import { CurrentChat } from './CurrentChat/CurrentChat';
import { ChatProvider } from '../contexts/ChatContext';
import { homeDivStyle } from './ChatHomeStyle';
export function ChatHome() {
  return (
    <ChatProvider>
      <div css={homeDivStyle}>
        <ChatList />
        <CurrentChat />
      </div>
    </ChatProvider>
  );
}
