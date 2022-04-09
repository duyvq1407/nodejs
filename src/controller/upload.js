
export const textSearch = async (data) => {
    try { 
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/duyvqph18088/image/upload";
        const CLOUDINARY_PRESET = "y12jh0jj";
        const file = data.image[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);
        // call api cloudinary
        const response = await axios.post(CLOUDINARY_API, formData, {
            headers: {
                "Content-Type": "application/form-data",
            },
        });
        res.json(response.data.url)
        // props.onUpdate({...data, image: res.data.url})
    }catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })        
    }
}