import { useLoaderData } from "react-router-dom"

const ProductDetails = () => {
    const product = useLoaderData()?.data;

    console.log(product);



    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails