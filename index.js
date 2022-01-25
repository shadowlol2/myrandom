const express = require("express");
const res = require("express/lib/response");
const { append } = require("express/lib/response");
const app = express();
var port = 3004
const yesno = [
    {
        yes:'yes',
        no: 1,
    },
    {
        yes:'yes',
        no: 1,
    },{
        yes:'yes',
        no: 1,
    },
]

app.listen(port, () => {
    console.log(`Express running on port ${port}`)
})


app.get('/yes', (request,response) => {
response.send('Hello!, its paetheic')
})

app.post('/yes', (request, response) => {

})