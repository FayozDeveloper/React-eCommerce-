import React from 'react';
import Products from "./Products/Products";
import BackIMG from '../assets/wallpaperflare.com_wallpaper (1).jpg'

function Home(props) {
    return (
        <div className="wrap">
            <div className="card bg-dark text-white border-0">
                <img src={BackIMG} className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;