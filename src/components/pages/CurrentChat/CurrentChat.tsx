import React, { useState, useEffect } from 'react';
import { useChatContext } from '../../contexts/ChatContext';
import { addDialogue, addContents, getChatModels } from '../../apis';
import CustomTextField from '../CurrentChat/TextField/CustomTextfield';
import { ChatContents } from './ChatContents/ChatContents';
import { ChatModelList } from './ChatModelList/ChatModelList';
import submit from './../../../assets/submit.svg';
import chatBackGround from './../../../assets/chatBackGround.png';
import { css } from '@emotion/react';
import {
  containerStyle,
  backgroundStyle,
  contentWrapperStyle,
  flexColumnStyle,
  headerStyle,
  buttonStyle,
  loadingContainerStyle,
  footerStyle,
} from './CurrentChatStyles';
interface CircularLoadingProps {
  size: string;
}
const CircularLoading: React.FC<CircularLoadingProps> = ({ size }) => {
  return (
    <div
      css={css`
        display: inline-block;
        width: ${size};
        height: ${size};
        border: 5px solid #f3f3f3;
        border-top: 5px solid #76c7c0;
        border-radius: 50%;
        animation: spin 1s linear infinite;

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
    />
  );
};
export const CurrentChat = React.memo(() => {
  const { selectChat, selectedChatId, addChat, clickAddChat, selectedModelId, selectModel } =
    useChatContext();
  const [showCircularLoading, setShowCircularLoading] = useState(false);
  const [value, setValue] = useState('');
  const [chatModels, setChatModels] = useState([]);
  const [addCircular, setAddCircular] = useState(false);
  const [isContentUpdated, setIsContentUpdated] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  const handleModelSelect = async () => {
    setShowCircularLoading(true);
    try {
      const response = await getChatModels();
      if (selectedModelId === '') {
        selectModel(response[0].chat_model_id);
      }
      setChatModels(response);
    } catch (error) {
      console.error('Error fetching chat models:', error);
    } finally {
      setShowCircularLoading(false);
    }
  };

  const handleSubmit = async () => {
    setAddCircular(true);
    try {
      if (selectedChatId !== '') {
        await addContents(selectedChatId, value);
      } else {
        const response = await addDialogue(selectedModelId, value);
        selectChat(response.chat_id);
        clickAddChat(true);
      }
      setValue('');
      setIsContentUpdated((prev) => !prev);
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    } finally {
      setAddCircular(false);
    }
  };

  useEffect(() => {
    setValue('');
  }, [addChat, selectChat]);

  return (
    <>
      <div css={containerStyle}>
        <img src={chatBackGround} css={backgroundStyle} alt="backgroundpng" />
        <div css={contentWrapperStyle}>
          <div css={flexColumnStyle}>
            <div css={headerStyle}>
              <button css={buttonStyle} onClick={handleModelSelect}>
                {showCircularLoading ? <CircularLoading size="15px" /> : '모델 선택'}
              </button>
              {selectedModelId !== '' && <ChatModelList chatModels={chatModels} />}
            </div>
            {addCircular ? (
              <div css={loadingContainerStyle}>
                <CircularLoading size="80px" />
              </div>
            ) : (
              <ChatContents isContentUpdated={isContentUpdated} />
            )}
            <div css={footerStyle(selectedChatId)}>
              <CustomTextField
                isEditMode={selectedModelId === ''}
                placeholder={
                  selectedModelId === ''
                    ? 'select model first'
                    : 'Type your message under 100 words.'
                }
                onChange={handleNameChange}
                valueR={value}
              />
              <button
                onClick={handleSubmit}
                css={{
                  cursor: selectedModelId === '' || value === '' ? 'default' : 'pointer',
                }}
                disabled={selectedModelId === '' || value === ''}
              >
                <img src={submit} alt="submit" css={{ width: '25px', height: '25px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
