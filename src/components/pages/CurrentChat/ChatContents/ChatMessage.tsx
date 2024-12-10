import {
  userMessageStyle,
  botMessageStyle,
  botNameStyle,
  userMessageDivStyle,
  boxMessageDivStyle,
} from './ChatMessageStyles';
import { ChatMessageProps } from '../../../interfaces/interfaces';

export function ChatMessage({ dialogue }: ChatMessageProps) {
  const formatText = (text: string) =>
    text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <>
      <div css={userMessageDivStyle}>
        <div css={userMessageStyle}>{formatText(dialogue.prompt)}</div>
      </div>
      <div>
        <div css={botNameStyle}>Nota AI</div>
        <div css={boxMessageDivStyle}>
          <div css={botMessageStyle}>{formatText(dialogue.completion)}</div>
        </div>
      </div>
    </>
  );
}
