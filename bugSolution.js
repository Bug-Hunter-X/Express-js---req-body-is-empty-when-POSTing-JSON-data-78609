const express = require('express');
const app = express();
app.use(express.json()); // Correctly placed middleware
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server started on port 3000'));