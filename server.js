import express from 'express';
// import OpenAIChatClient from './OpenAIChatClient.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
  // // Log the received data
  // console.log('Received data:', req.body);
  
  // Send a response with the received data and additional information
  res.json({ message: 'Hello from Node.js!', received : req.body.message, result: "good" });
});

// const openAI = new OpenAIChatClient(process.env.OPENAI_API_KEY);
// app.get('/api/chat', async (req, res) => {
//   try {
//     // Call the createChatCompletion method of OpenAIChatClient
//     const response = await openAI.createChatCompletion([
//       { role: 'user', content: 'Say this is a test' },
//     ]);
//     res.json({ message: 'Chat completion:', response });
//   } catch (error) {
//     console.error('Failed to get chat completion:', error);
//     res.status(500).json({ error: 'Failed to get chat completion' });
//   }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});