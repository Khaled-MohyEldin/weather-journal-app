
const express = require('express')

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


app.use(express.static('website'));


const port = 5000;

const server = app.listen(port, console.log(`running on Localhost: ${port}`));

//===================================

// Setup empty JS object to act as endpoint for all routes
// let projectData = {};

//Requests 

const projectData = []
app.post('/addTemp', addTemp )

function addTemp (req, res){
    projectData.unshift(req.body)
    // console.log(projectData);
    // projectData = { data: data };
    // console.log(projectData)
 }
 
 app.get('/all', function(req, res){ res.send(projectData)}); 






