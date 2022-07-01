const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/routes');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://shilpikumari:shilpi1234@cluster0.phpas.mongodb.net/group-69-Database")
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);

app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: `Not found ${req.url}`
        
    })
    next()
})
app.listen(process.env.PORT || 6000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 6000))
});
