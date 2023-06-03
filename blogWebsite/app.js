const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

app.get("/", function (req, res) {
    res.render("list", {
        posts: posts
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/contact-us", function (req, res) {
    res.render("contact-us");
});

app.get("/compose", function (req, res) {
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

app.get("/posts/:postTitle", function (req, res) {
    const requestedTitle = _.lowerCase(req.params.postTitle);
    posts.forEach(function (post) {
        const storedData = _.lowerCase(post.title);
        if (storedData === requestedTitle) {
            res.render("posts", {
                title: post.title,
                content: post.content
            });
        }

    });
});


app.listen(2000, function () {
    console.log("The server is started on port 2000");
})