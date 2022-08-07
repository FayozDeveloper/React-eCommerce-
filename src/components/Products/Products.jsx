import React, {useEffect, useState} from 'react';
import Loading from "../Loading";
import ShowProducts from "./ShowProduct.jsx";


function Products(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState(data)
    let componentMounted = true

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(false)
            const response = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
            }

            return () => {
                componentMounted = false;
            };
        }

        getProducts();
    },[])

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading?.length === 0 ? <Loading /> : <ShowProducts filter={filter} data={data} setFilter={setFilter}/>}
                </div>
            </div>
        </div>
    );
}

export default Products;