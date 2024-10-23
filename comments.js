// create web server 
const express = require('express');
const app = express();
// create port
const port = 3000;
// create comments array
const comments = [
  { id: 1, author: 'Nate', text: 'Hello World' },
  { id: 2, author: 'Kevin', text: 'Hello World' },
  { id: 3, author: 'Bood', text: 'Hello World' },
  { id: 4, author: 'Kane', text: 'Hello World' },
  { id: 5, author: 'Jenny', text: 'Hello World' }
];
// create route /comments
app.get('/comments', (req, res) => {
  res.send(comments);
});
// create server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});