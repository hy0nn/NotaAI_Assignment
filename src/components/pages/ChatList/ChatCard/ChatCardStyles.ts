import { css } from '@emotion/react';

export const cardContainer = (isSelected: boolean) => css`
  border: none;
  border-bottom: 1px solid #303030;
  height: 50px;
  padding: 10px;
  cursor: pointer;
  background-color: ${isSelected ? '#464646' : '#202123'};
  color: white;
  &:hover {
    background-color: #2c2c2c;
  }
`;

export const cardContent = css`
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;
export const chatcontentstyle = css`
  color: white;
`;
