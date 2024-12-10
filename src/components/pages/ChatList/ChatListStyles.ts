import { css } from '@emotion/react';

export const chatListContainerStyles = (isCollapsed: boolean) => css`
  width: ${isCollapsed ? '6%' : '30%'};
  height: 100vh;
  background-color: #202123;
  overflow-x: hidden;
  transition: width 0.3s ease;
`;

export const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const searchInputStyles = {
  width: '100%',
  padding: '8px',
  margin: '8px 0',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};
export const chatListStyles = (isCollapsed: boolean) => css`
  height: 90%;
  overflow-x: hidden;
  justify-content: space-between;
  overflow-y: ${isCollapsed ? 'hidden' : 'auto'};
  align-items: center;
`;
export const buttonStyles = css`
  padding: 0.5rem;
  height: 2.8rem;
  background-color: black;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  &:focus {
    outline: none;
  }
  border-width: 0px;
  img {
    width: 20px;
    height: 20px;
  }
`;
