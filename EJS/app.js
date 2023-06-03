const express = require("express");
const bodyParser = require("body-parser");
const Date = require(__dirname + "/day.js");

const app = express();

app.use(express.static('public'));
var items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    let day = Date();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});
app.post("/", function (req, res) {
    var item = req.body.newItem;

    if (req.body.newItem = "work") {
        workItems.push(item);
        res.redirect("/Work");
    } else {
        items.push(item);
        res.redirect("/");

    }
});

app.get("/Work", function (req, res) {
    res.render("list", {
        listTitle: "work List",
        newListItems: workItems
    });
});

app.get("/About", function (req, res) {
    res.render("about");
})

app.listen(3000, () => {
    console.log("your server is started on port 3000!");
});