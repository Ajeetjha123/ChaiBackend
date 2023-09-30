require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebookurl', (req, res) => {
   res.send('Facebook URL: ');
});
app.get('/login', (req, res) => {
  res.send('<h1>Please Login Chai And Code Channel</h>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})