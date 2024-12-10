import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: black;
  border-radius: 20px;
  background: #202123;
`;

export const Input = styled.textarea`
  width: 97%;
  min-height: 60px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid transparent;
  background: inherit;
  color: white;
  border-radius: 16px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    color: white;
    border-color: #060b11;
    outline: none;
  }

  &:disabled {
    background: inherit;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 14px;
  color: #aaa;
  background-color: #202123;
  padding: 0 5px;
`;
