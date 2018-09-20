const express = require('express');
const app = express();
//create a rout handler(app.post, app.put, app.delete)
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
