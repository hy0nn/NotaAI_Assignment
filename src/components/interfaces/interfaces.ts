export interface ChatContextType {
  selectedChatId: string;
  selectChat: (id: string) => void;
  selectedModelId: string;
  selectModel: (id: string) => void;
  addChat: number;
  clickAddChat: (flag: boolean) => void;
}

export interface Dialogue {
  dialogue_id: string;
  prompt: string;
  completion: string;
}

export interface ChatItem {
  chat_id: string;
  chat_model_id: string;
  chat_model_name: string;
  dialogues: Dialogue[];
}
export interface ChatModelType {
  chat_model_id: string;
  chat_model_name: string;
}
export interface ChatMessageProps {
  dialogue: Dialogue;
}

export interface ChatModelListProps {
  chatModels: ChatModelType[];
}
export interface ChatCardProps {
  modelName: string;
  firstQuestion: string;
  isSelected: boolean;
  onClick: () => void;
}
export interface ChatCardModel {
  modelName: string;
  firstQuestion: string;
}

export interface CustomTextFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  open?: boolean;
  valueR?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isEditMode?: boolean;
}
