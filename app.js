const { response } = require("express");
const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("static"));


//home
app.get("/", (req, res) =>
    res.sendFile(__dirname + "/views/index.html")
);
//to about
app.get("/about", (req, res) => 
    res.sendFile(__dirname + "/views/about.html")
);
// to works
app.get("/works", (req, res) => 
    res.sendFile(__dirname + "/views/works.html")
);
//to photo
app.get("/photos", (req, res) => 
    res.sendFile(__dirname + "/views/photos.html")
);

//localhost:5000
const PORT = 5000;
app.listen(PORT, () => console.log('running on port 5000'))
