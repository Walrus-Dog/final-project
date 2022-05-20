import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Main() {

    const [inStock, setInStock] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/api/instock")
        .then(res => {
            setInStock(res.data)
        })
    }, [])

    let inStockArray = []
    for (let i= 0; i < 4; i++) {
        inStockArray.push(Math.ceil(Math.random() * 20))
    }
    console.log(inStockArray)
    let inStockItems = inStock.map((el, i) =>{
        return (
            <div id={i} key={i} className="bs-card card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{el.is_name}</h5>
                        <p className="card-text">{el.is_desc}</p>
                        <p className="casrd-text">{el.is_price}</p>
                        <Link to={`/InStockSingle/${el.is_id}`} className="btn btn-primary bs-button">Buy Now!</Link>
                    </div>
                </div>
        )
    }).filter(el => inStockArray.includes(el.props.id))

    //inStockItems.forEach(el => console.log(el))

    return (
        <main id="main" className="main">
        <section className="featured-products-section container" id="productsSection">
            <div className="row">
                <h2 className="main-header">
                    Featured Products
                </h2>
                {inStockItems}
            </div>
        </section>
        <section className="customer-stories container">
            <div className="row">
                <h2 className="main-header">
                    Customer Stoires
                </h2>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="coming-soon container">
            <div className="row">
                <h2 className="main-header">
                    Items Coming Soon!
                </h2>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bs-button">Go somewhere</a>
                    </div>
                </div>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bs-button">Go somewhere</a>
                    </div>
                </div>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bs-button">Go somewhere</a>
                    </div>
                </div>
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary bs-button">Go somewhere</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}