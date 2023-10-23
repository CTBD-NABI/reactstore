import { useState, useEffect } from "react"
import Card from "./Card"

const Home = () => {

    const [store, setStore] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => setStore(result))
    }, [])


    console.log(store)

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {
                    store.map(pd => <Card key={pd.id} info={pd} />)
                }
            </div>
        </>
    )
}

export default Home