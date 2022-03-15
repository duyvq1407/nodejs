// const http = require('http');
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import productRoute from './routes/product'
import userRoute from './routes/user'
import morgan from 'morgan';
import { readdirSync } from 'fs';
import path, { dirname } from 'path';

const app = express();

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
// readdirSync(__dirname + "/routes").forEach((fileName) => {
//     import("./routes/" + fileName)
//         .then(({ default: router }) => router.default)
//         .then((router) => {
//             app.use("/api", router);
//         });
// });
app.use("/api", productRoute)
app.use("/api", userRoute)

// connect to db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch((error) => console.log(error))

// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});