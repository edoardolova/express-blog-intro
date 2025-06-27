//express
const express = require("express");
const app = express();
const port = 3000;

//global variable
const posts = [
    {
        title: "ciambellone",
        content: "questo è un poste sul ciambellone",
        image: "/images/ciambellone.jpeg",
        tags: ["dolce", "vaniglia"]
    },
    {
        title: "cracker barbabietola",
        content: "questo è un poste sul cracker alla barbabietola",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["dolce", "snack","barbabietola"]
    },
    {
        title: "pane fritto dolce",
        content: "questo è un poste sul pane fritto dolce",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["dolce", "pane", "fritto"]
    },
    {
        title: "pasta barbabietola",
        content: "questo è un poste sulla pasta alla barbadietola",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["primi", "pasta", "barbabietola"]
    },
    {
        title: "torta paesana",
        content: "questo è un poste sulla torta paesana",
        image: "/images/torta_paesana.jpeg",
        tags: ["dolce", "torta"]
    }
];

app.listen(port, ()=>{
    console.log(`port: ${port}`)
});

//default
app.get("/", (req, res) =>{
    res.send("Server del mio blog");
});

//add static asset
app.use(express.static('public'));

//get posts
app.get("/api/posts", (req, res)=>{
    res.json(posts);
});
