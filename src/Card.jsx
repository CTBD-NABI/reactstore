import { Link } from "react-router-dom"
const Card = ({ info }) => {
    const { category, description, id, image, rating: { rate }, title, price } = info
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="w-10 h-10">{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card