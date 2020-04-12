const express = require('express')

const app = express()

app.get('/api/signup',(req, res) => {
  res.json({
    data: 'you hit signup'
  })
})


const port = process.env.port || 4000

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})