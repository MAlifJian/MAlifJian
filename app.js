const express = require("express");
const port = process.env.PORT || 3030;
const app = express();

const expressLayouts = require("express-ejs-layouts");
// Gunakan EJS

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use("/asset",express.static(__dirname + '/asset'));

app.get("/", (req, res) => {
    res.render("index",{dir: "",layout: "mainLayout.ejs"});
});

app.get("/view/updated",(req,res) => {
    res.render("updated", {dir: "..",layout: "mainLayout.ejs"})
})

app.use("/", (req,res) => {
    res.send("<h1>ERROR 404 Not Found</h1>")
})
app.listen(port, () => {
    console.log("Running in http://localhost:" + port);
});
