import *as express from "express";

const app = express();

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log("soy la app", port);
});

app.get("/players", (req, res)=>{
    res.json({
        message: {}
    })  
})

app.post("/players", (req, res) =>{
    res.status(201).json({
        message: "",
        nombre: ""
    })
})
