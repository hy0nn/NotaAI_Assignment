import { css } from '@emotion/react';

export const containerStyle = css`
  width: 100%;
  height: 100vh;
`;

export const backgroundStyle = css`
  z-index: -5;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const contentWrapperStyle = css`
  width: 100%;
  height: 100%;
  transition: none;
  overflow-y: auto;
`;

export const flexColumnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const headerStyle = css`
  display: flex;
  height: 10%;
  background-color: rgba(0, 0, 0, 0.2);
  gap: 10px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  align-items: center;
`;

export const buttonStyle = css`
  background-color: black;
  color: white;
  margin-left: 10px;
  width: 148px;
  height: 46px;
`;

export const loadingContainerStyle = css`
  text-align: center;
  color: white;
  display: flex;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const footerStyle = (selectedChatId: string) => css`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 0px 30px;
  position: ${selectedChatId === '' ? 'relative' : 'absolute'};
  width: ${selectedChatId === '' ? '' : '100%'};
  bottom: ${selectedChatId === '' ? '' : '5px'};
`;
