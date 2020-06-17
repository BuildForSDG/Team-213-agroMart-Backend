import express from 'express';
import data from './data';



const app =express();
const PORT = 5000;

//Routes
app.get("/api/products", (req, res) => {
    res.send(data.products);
    
});


//
app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+ PORT);
})
