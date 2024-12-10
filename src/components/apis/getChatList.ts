export async function getChatList() {
  try {
    const response = await fetch('/chats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error('Error getting ChatList:', error);
  }
}