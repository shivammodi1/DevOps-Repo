const express = require('express');


const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello from Dockerized Express App!');
});

app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});



app.get('/user/:id/:name' ,(req,res)=>{
  const id = req.params.id;
  const name = req.params.name;
  res.send(`Hello ${name} how are you! Your ID is ${id}`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
