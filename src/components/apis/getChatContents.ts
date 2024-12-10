export async function getChatContents(chatId: string) {
  try {
    const response = await fetch(`/chats/${chatId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data.dialogues;
  } catch (error) {
    console.error('Error getting Chat by ID:', error);
  }
}
