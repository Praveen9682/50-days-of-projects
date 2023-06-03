const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
app.use(bodyParser.urlencoded({ extended: true }));

// to specifie the local folder like style.css or images
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (res, req) {


    const firstName = res.body.fname;
    const lastName = res.body.lname;
    const email = res.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }


    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/2771f832d4";
    const options = {
        method: "POST",
        auth: "Praveen2:1e0fcfbc09c48c09c5796e9e1d69cd90-us21"
    }
    const request = https.request(url, options, function (response) {

        if (response.statusCode === 200) {
            req.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function (data) {

            console.log(JSON.parse(data));

        });
    });

    request.write(jsonData);
    request.end();

    // console.log(firstName, lastName, email);
});


app.post("/failure", (req, res) =>{
    res.redirect("/");
});


app.listen(3000, function () {
    console.log("your server is started on port 3000");
})




// API
// 1e0fcfbc09c48c09c5796e9e1d69cd90-us21

// audience ID
// 2771f832d4