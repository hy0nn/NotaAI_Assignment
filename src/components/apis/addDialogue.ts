export async function addDialogue(chatModelId: string, prompt: string) {
  try {
    const chatResponse = await fetch('/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_model_id: chatModelId,
      }),
    });

    if (!chatResponse.ok) {
      throw new Error(`HTTP error! status: ${chatResponse.status}`);
    }

    const createdChat = await chatResponse.json();
    const newChatId = createdChat.data[createdChat.data.length - 1]?.chat_id;

    if (!newChatId) {
      throw new Error('Failed to retrieve new chat ID');
    }
    const dialogueResponse = await fetch(`/chats/${newChatId}/dialogues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    if (!dialogueResponse.ok) {
      throw new Error(`HTTP error! status: ${dialogueResponse.status}`);
    }

    const updatedChat = await dialogueResponse.json();

    return updatedChat.data;
  } catch (error) {
    console.error('Error adding dialogue:', error);
    return null;
  }
}
