import { useState, useEffect, useRef } from 'react';
import { useChatContext } from '../../../contexts/ChatContext';
import { getChatContents } from '../../../apis';
import { Dialogue } from '../../../interfaces/interfaces';
import { ChatMessage } from './ChatMessage';
import { ScrollToBottomButton } from './ScrollToBottomButton';
import { chatContainerStyle, emptyStateStyle } from './ChatContentsStyles';

export function ChatContents({ isContentUpdated }: { isContentUpdated: boolean }) {
  const { selectedChatId } = useChatContext();
  const [contents, setContents] = useState<Dialogue[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchChatContents = async () => {
      if (selectedChatId) {
        const response = await getChatContents(selectedChatId);
        setContents(response || []);
      } else {
        setContents([]);
      }
    };
    fetchChatContents();
  }, [selectedChatId, isContentUpdated]);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const isAtBottom =
          chatContainerRef.current.scrollHeight -
            chatContainerRef.current.scrollTop -
            chatContainerRef.current.clientHeight <=
          1;
        setIsScrolled(!isAtBottom);
      }
    };

    const chatContainer = chatContainerRef.current;
    chatContainer?.addEventListener('scroll', handleScroll);
    return () => chatContainer?.removeEventListener('scroll', handleScroll);
  }, [isContentUpdated]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [contents]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  if (!selectedChatId) {
    return (
      <div css={emptyStateStyle}>
        <div>
          <h2>노타 AI</h2>
          <h1>무엇을 도와드릴까요?</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div ref={chatContainerRef} css={chatContainerStyle}>
        {contents.map((item) => (
          <ChatMessage key={item.dialogue_id} dialogue={item} />
        ))}
      </div>
      {isScrolled && <ScrollToBottomButton onClick={scrollToBottom} />}
    </>
  );
}
