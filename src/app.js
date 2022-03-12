// const http = require('http');
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoute from './routes/product'
import morgan from 'morgan';

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute)

// connect to db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch((error) => console.log(error))

// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});