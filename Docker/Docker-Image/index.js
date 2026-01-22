const express = require('express');


const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Express App!');
});

app.get('/health', (req, res) => {
  res.send('OK - The server is healthy!');
});

// working with volumes so it will reflect changes without rebuilding the image
app.get('/user',(req,res)=>{
    const name = req.params.name;
    res.send(`Hello, ${name}! Welcome to the Dockerized Express App.`);
})

app.get('/user/:id/:name' ,(req,res)=>{
  const id = req.params.id;
  const name = req.params.name;
  res.send(`User ID: ${id}, Name: ${name}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
