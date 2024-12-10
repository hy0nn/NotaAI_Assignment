export async function addContents(chatId: string, prompt: string) {
  try {
    const response = await fetch(`/chats/${chatId}/dialogues`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error adding dialogue to chat:', error);
  }
}
