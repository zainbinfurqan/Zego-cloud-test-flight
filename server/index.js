const express = require('express')
const app = express()
const port = 3001
const { MongoDBConnection } = require('./dbconfiguration/mongodb')
MongoDBConnection()


app.get('/', (req, res) => {
    res.send('health check pass')
})

const authRouter = require('./routes/auth');

app.use('/auth', authRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})