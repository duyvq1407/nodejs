import mongoose from "mongoose";

//data fake
// const data = [
//     {
//         id: 1,
//         name: "Product 21",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX71_TAsDlQuGGDciBYwX5IKAQJcZauxy4qSuhcxO5TlYECRRrqP8dtsoCFvR1NIXbn0&usqp=CAU"
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfFhj2AmdBUAjp5VW45uJSeMehluBZvdfFKg&usqp=CAU"
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTKNpyKFX7zzsCTGNEikWbmmbkj_Hibeb5ZPDX-LBmx7jv5mUR-ADiTuRM4L4LMm-sYg&usqp=CAU"
//     },
//     {
//         id: 4,
//         name: "Product 4",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHvu30Czk0i_q7aJqB_mJSfnV7aiMdEZ_nDhZA4ugFdjcOiM_kXkdipdvMEqMd0QfFA8&usqp=CAU"
//     },
//     {
//         id: 5,
//         name: "Product 5",
//         img: "https://hinhnen123.com/wp-content/uploads/2021/06/Bo-suu-tap-99-hinh-nen-dien-thoai-cute-ngo-nginh-nhat.jpg"
//     }
// ];


const Product = mongoose.model('Product', {name : String});



//get all products
export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
};
//get product
export const get = async (req, res) => {
    try {
        console.log(req.params.id)
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }
    // res.json(data.find(item => item.id == req.params.id));
};
//delete product
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id});
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }

    // res.json(data.filter(item => item.id != req.params.id));
};
//edit product
export const edit = async (req, res) => {
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate(condition, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Sửa sản phẩm không thành công"
        })
    }
    // const result = data.map(item => item.id == req.params.id ? req.body : item);
    // res.json(result)
};
//add product
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
};