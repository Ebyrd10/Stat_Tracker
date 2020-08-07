const express = require('express')
const morgan = require ('morgan')
const dotenv = require('dotenv')

//Load env config 
dotenv.config({path: './config.env'});

const app = express();

//Dev log middleware for dev mode
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

//Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));

//Handle production
if(process.env.NODE_ENV === 'production'){
    //Set Static Folder
    app.use(express.static(__dirname + '/public'));

    //Handle Single Page Application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`)
});

