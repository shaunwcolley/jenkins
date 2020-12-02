const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {

  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const hour  = date.getHours();
  const min = date.getMinutes();
  res.send(`Hello GSTA Mainframe App Mod Chapter, Demo ${month}/${day}/${year} at ${hour}:${min} CST!!!`);

  // res.send('Hello GSTA Mainframe App Mod Chapter, Demo 12/2/2020, 10:30am CST!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
