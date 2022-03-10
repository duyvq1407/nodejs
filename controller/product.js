
//data fake
const data = [
    {
        id: 1,
        name: "Product 21",
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
    }
];

//get all products
export const list = (req, res) => {
    res.json(data);
};
//get product
export const get = (req, res) => {
    res.json(data.find(item => item.id == req.params.id));
};
//delete product
export const remove = (req, res) => {
    res.json(data.filter(item => item.id != req.params.id));
};
//edit product
export const edit = (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item);
    res.json(result)
};
//add product
export const create = (req, res) => {
    data.push(req.body);
    console.log(data);
    res.json(data);
};