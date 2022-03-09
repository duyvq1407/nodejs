// const http = require('http');
const express = require('express');
const app = express();
app.get('/')
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/api/products") {
        const data = [
            {
                id: 1,
                name: "Product"
            },
            {
                id: 2,
                name: "Product  2"
            },
        ]
        res.end(JSON.stringify(data))
    } 
    else if (url === "/api/categories") {
        const data = [
            {
                id: 1,
                name: "Category 1"
            },
            {
                id: 2,
                name: "Category 2"
            },
        ]
        res.end(JSON.stringify(data))
    }
    else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>Xin Chao</h1></body></html>");
        res.end()
    }
})

const PORT = 3001;
server.listen(PORT, () => {
    console.log("Bạn đang chạy cổng " + PORT)
})