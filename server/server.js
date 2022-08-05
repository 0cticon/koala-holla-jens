const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const koalaRouter = require('./routes/koala.router')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));



// ROUTES
app.use('/koalas', koalaRouter)

app.post('koalas', (req, res) => {
  const koala = req.body;

  currentInventory.push(koala);
  res.send(koala);
}) 

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
