import OpenAI from 'openai';

class OpenAIChatClient {
  constructor(apiKey) {
    this.client = new OpenAI({
      apiKey: apiKey,
    });
  }

  async createChatCompletion(messages, model = 'gpt-3.5-turbo') {
    try {
      const chatCompletion = await this.client.chat.completions.create({
        messages: messages,
        model: model,
      });
      return chatCompletion;
    } catch (error) {
      console.error('Error creating chat completion:', error);
      throw error;
    }
  }
}

// Example usage
async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  const chatClient = new OpenAIChatClient(apiKey);

  try {
    const response = await chatClient.createChatCompletion([
      { role: 'user', content: 'Say this is a test' },
    ]);
    console.log('Chat completion:', response);
  } catch (error) {
    console.error('Failed to get chat completion:', error);
  }
}