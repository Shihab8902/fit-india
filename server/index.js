const express = require("express");
const globalErrorHandler = require("./src/util/globalErrorHanlder");
const connectDB = require("./src/util/db/connectDB");
const app = express();
const port = process.env.PORT || 9000;


//Routes
const productRoutes = require('./src/routes/productRoutes');






//Routes use
app.use(productRoutes);
















//Check server status
app.get("/", (req, res) => {
    res.send({ message: "The server is up and running...." });
});



//Handle server errors
app.all("*", (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} does not exist on the server`);
    error.status = 404;
    next(error);
});

app.use(globalErrorHandler);




//Listen server and establish database connection
const run = () => {
    connectDB();
    app.listen(port, () => {
        console.log(`The server is running at http://localhost:${port}`);
    })
}
run();