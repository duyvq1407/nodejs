// const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const checkAuth = (req, res,next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        console.log('Chim cút');
    }
}
app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})
app.get('/api/products', checkAuth, (req, res) => {
    const data = [
        {
            id: 1,
            name: "Product 1",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX71_TAsDlQuGGDciBYwX5IKAQJcZauxy4qSuhcxO5TlYECRRrqP8dtsoCFvR1NIXbn0&usqp=CAU"
        },
        {
            id: 2,
            name: "Product 2",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfFhj2AmdBUAjp5VW45uJSeMehluBZvdfFKg&usqp=CAU"
        },
        {
            id: 3,
            name: "Product 3",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTKNpyKFX7zzsCTGNEikWbmmbkj_Hibeb5ZPDX-LBmx7jv5mUR-ADiTuRM4L4LMm-sYg&usqp=CAU"
        },
        {
            id: 4,
            name: "Product 4",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHvu30Czk0i_q7aJqB_mJSfnV7aiMdEZ_nDhZA4ugFdjcOiM_kXkdipdvMEqMd0QfFA8&usqp=CAU"
        },
        {
            id: 5,
            name: "Product 5",
            img: "https://hinhnen123.com/wp-content/uploads/2021/06/Bo-suu-tap-99-hinh-nen-dien-thoai-cute-ngo-nginh-nhat.jpg"
        },
    ];
    res.json(data);
});
app.get('/api/categories', checkAuth, (req, res) => {
    const data = [
        {
            id: 1,
            name: "Category 1"
        },
        {
            id: 2,
            name: "Category 2"
        },
    ];
    res.json(data);
});
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     console.log(url);
//     if(url === "/api/products"){
//         const data = [
//             {id: 1, name: "Product A"}, 
//             {id: 2, name: "Product B"}
//         ];
//         res.end(JSON.stringify(data))
//     } else if( url === "/api/posts"){
//         console.log("API Post")
//     } else {
//         res.setHeader("Content-Type","text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>");
//         res.end();
//     }
// })
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng ", PORT);
});
