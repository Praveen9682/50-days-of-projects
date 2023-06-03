const express = require("express");
const app = express();
app.get("/", function(request, response){
    response.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(request, response){
    response.send("contact me:9682885974");
});

app.get("/about", function(request, response){
    response.send("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint et repudiandae, molestias eius voluptatibus eligend");
});
app.listen(3000, function(){
    console.log("server is on port 3000");
});

