import React from 'react';
import { useChatContext } from '../../../contexts/ChatContext';
import { ChatModelListProps } from '../../../interfaces/interfaces';
import { buttonStyle, containerStyle } from './ChatModelListStyles';

export const ChatModelList: React.FC<ChatModelListProps> = ({ chatModels }) => {
  const { selectChat, selectedModelId, selectModel } = useChatContext();

  return (
    <div css={containerStyle}>
      {chatModels.map((model) => {
        const isSelected = selectedModelId === model.chat_model_id;

        return (
          <button
            css={buttonStyle(isSelected)}
            disabled={isSelected}
            onClick={() => {
              if (!isSelected) {
                selectModel(model.chat_model_id);
                selectChat('');
              }
            }}
            key={model.chat_model_id}
          >
            {model.chat_model_name}
          </button>
        );
      })}
    </div>
  );
};
