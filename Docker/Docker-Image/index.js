const express = require('express');


const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Express App!');
});

app.get('/health', (req, res) => {
  res.send('OK - The server is healthy!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
