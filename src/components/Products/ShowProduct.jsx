import React from 'react';
import {Link} from "react-router-dom";

function ShowProduct(props) {

    const {data, setFilter, filter} = props

    const filterProduct = (event) => {
        const updateProduct = data.filter((name)=>name.category === event)
        setFilter(updateProduct)
    }


    return (
        <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-danger me-2' onClick={()=>setFilter(data)}>All</button>
                <button
                    className='btn btn-outline-secondary me-2'
                    onClick={()=>filterProduct("men's clothing")}
                >Men's clothing</button>
                <button
                    className='btn btn-outline-info me-2'
                    onClick={()=>filterProduct("women's clothing")}
                >Women's clothing</button>
                <button
                    className='btn btn-outline-warning me-2'
                    onClick={()=>filterProduct("jewelery")}
                >Jewelery</button>
                <button
                    className='btn btn-outline-primary me-2'
                    onClick={()=>filterProduct('electronics')}
                >Electronics</button>
            </div>

            {filter.map((product)=>{
                return (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img src={product.image} className='card-img-top' height='300px'  alt={product.title}/>
                                <div className="card-body">
                                    <h5 className='card-title mb-0'>{product.title.substring(0,12)}...</h5>
                                    <p className='card-text lead fw-bold' style={{color:'green'}}>${product.price}</p>
                                    <Link className='btn btn-outline-dark' to={`/products/${product.id}`}>buy now</Link>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    );
}

export default ShowProduct;