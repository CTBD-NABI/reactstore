import { Rating } from "@smastrom/react-rating"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import '@smastrom/react-rating/style.css'

const ProductDetails = () => {
    const [prod, setProd] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(result => setProd(result))
    }, [])


    return (
        <div>{prod.title}

            <img src={prod.image} alt="" />
            <Rating style={{ maxWidth: 180 }}
                readOnly
                orientation="horizontal" value={prod.rating?.rate} />
        </div>
    )
}

export default ProductDetails