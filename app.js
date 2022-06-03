const express = require("express");
const port = process.env.PORT || 3030;
const app = express();

const expressLayouts = require("express-ejs-layouts");
// Gunakan EJS

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use("/asset",express.static(__dirname + '/asset'));

app.get("/", (req, res) => {
    res.render("index",{dir: "",layout: "mainLayout.ejs",title: "OtakuRead - FansTranslation Light Novel Bahasa Indonesia"});
});

app.get("/view/updated",(req,res) => {
    res.render("view/updated", {dir: "..",layout: "mainLayout.ejs", title: "Update Novel Terbaru - FansTranslation Light Novel Bahasa Indonesia"})
})

app.get("/view/hottest", (req,res) => {
    res.render("view/hottest", {dir: "..",layout: "mainLayout.ejs", title: "Update Novel Terpanas - FansTranslation Light Novel Bahasa Indonesia"})
})

app.get("/view/favorite", (req,res) => {
    res.render("view/favorite", {dir: "..",layout: "mainLayout.ejs", title: "Novel Favorite Saya - FansTranslation Light Novel Bahasa Indonesia"})
})

app.use("/", (req,res) => {
    res.send("<h1>ERROR 404 Not Found</h1>")
})
app.listen(port, () => {
    console.log("Running in http://localhost:" + port);
});
