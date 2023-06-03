const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
let posts = [];
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("Home",{
        posts : posts
    }
    );
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact-us", (req, res) => {
    res.render("contact-us");
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/compose", function (req, res) {
    var post = {
        title: req.body.title,
        content: req.body.compose
    };

    posts.push(post);

    res.redirect("/");
});

app.listen(port, () => {
    console.log("the server is starting on" + port);
})