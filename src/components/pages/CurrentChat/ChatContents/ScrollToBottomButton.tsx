import { scrollButtonStyle } from './ScrollToBottomButtonStyles';
import bottomArrow from '../../../../assets/bottomArrow.png';

export function ScrollToBottomButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} css={scrollButtonStyle}>
      <img src={bottomArrow} alt="Scroll to bottom" />
    </button>
  );
}
