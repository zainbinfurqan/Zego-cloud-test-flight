const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const { MongoDBConnection } = require('./dbconfiguration/mongodb')
MongoDBConnection()
const port = 3001

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('health check pass')
})
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
const authRouter = require('./routes/auth');

app.use('/auth', authRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})