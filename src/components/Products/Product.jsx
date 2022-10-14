import React,{useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom";
import ContentLoader from "react-content-loader";
import {AddItem} from "../redux/action/action";

function Product(props) {
    const {id} = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(AddItem(product));
    }

    useEffect(() => {

        const getProduct = async () =>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct( await  response.json())
            setLoading(false)
        }

        getProduct()

    },[id])

    const Loading = () =>{
        return (
            <>
                <ContentLoader
                    speed={2}
                    width={400}
                    height={500}
                    viewBox="0 0 400 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="39" y="31" rx="0" ry="0" width="120" height="137" />
                    <rect x="204" y="29" rx="0" ry="0" width="54" height="10" />
                    <rect x="205" y="49" rx="0" ry="0" width="3" height="15" />
                    <rect x="119" y="59" rx="0" ry="0" width="6" height="40" />
                    <rect x="205" y="47" rx="0" ry="0" width="128" height="33" />
                    <rect x="207" y="89" rx="0" ry="0" width="47" height="10" />
                    <rect x="205" y="109" rx="0" ry="0" width="61" height="19" />
                    <rect x="207" y="137" rx="0" ry="0" width="173" height="57" />
                </ContentLoader>
            </>
        )
    }


    return (
        <div className='container py-5'>
            <div className="row">
                {loading ? <Loading/> :   <>
                    <div className="col-md-6 justify-content-center d-flex">
                        <img src={product.image} alt={product.title} height='400px' width='400px'/>
                    </div>
                    <div className="col-md-6 my-4">
                        <h3 className='text-uppercase text-black-50'>{product.category}</h3>
                        <h2>{product.title}</h2>
                        <p className='lead fw-bolder'>
                            Rating: {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                        <p className='lead'>{product.description}</p>
                        <button
                            className='btn btn-outline-primary px-4 py-2'
                            onClick={()=>addProduct(product)}
                        >Add to card</button>
                        <Link to='/cart'  className='btn btn-dark ms-3 px-4 py-2'>Go to Card</Link>
                    </div>
                </>
                }
            </div>
        </div>
    );
}

export default Product;