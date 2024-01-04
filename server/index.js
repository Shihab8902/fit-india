const express = require("express");
const globalErrorHandler = require("./src/util/globalErrorHanlder");
const connectDB = require("./src/util/db/connectDB");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9000;



//Middlewares
app.use(cors());
app.use(express.json());




//Routes
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require("./src/routes/userRoutes");
const authenticationRoutes = require("./src/routes/authentication");
const cartRoutes = require("./src/routes/cartRoutes");
const addressRoutes = require("./src/routes/addressRoutes");




//Routes use
app.use(productRoutes);
app.use(userRoutes);
app.use(authenticationRoutes);
app.use(cartRoutes);
app.use(addressRoutes);
















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