const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.get('/', (req, res) => {
    console.log(req.query)
    res.send('veera')
})
app.post('/test/:id', (req, res) => {
    console.log(req.body)
    const{sample} = req.body
    res.json({"test1":sample})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
// })