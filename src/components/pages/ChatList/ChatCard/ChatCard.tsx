import React from 'react';
import { ChatCardProps } from '../../../interfaces/interfaces';
import { cardContainer, cardContent } from './ChatCardStyles';

export const ChatCard: React.FC<ChatCardProps> = React.memo(
  ({ modelName, firstQuestion, onClick, isSelected }) => {
    return (
      <div
        onClick={onClick}
        css={cardContainer(isSelected)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
      >
        <div css={cardContent}>
          <div>{firstQuestion}</div>
          <div>{modelName}</div>
        </div>
      </div>
    );
  },
);
