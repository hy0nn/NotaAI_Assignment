import { css } from '@emotion/react';

export const buttonStyle = (isSelected: boolean) => css`
  background-color: ${isSelected ? 'black' : '#3E3F4A'};
  border-color: ${isSelected ? '#2990FD' : ''};
  border: 3px solid;
  height: 46px;
  margin-right: 10px;
  color: ${isSelected ? '#2990FD' : 'white'};
`;

export const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
`;
