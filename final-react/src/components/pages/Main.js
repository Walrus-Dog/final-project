import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Main() {
    // instock random
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
    let inStockItems = inStock.map((el, i) =>{
        return (
            <div id={i} key={i} className="bs-card card" style={{ width: "18rem" }}>
                <img src={el.is_img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{el.is_name}</h5>
                        <p className="card-text">{el.is_desc}</p>
                        <p className="casrd-text">{el.is_price}</p>
                        <Link to={`/InStockSingle/${el.id}`} className="btn btn-primary bs-button">Buy Now!</Link>
                    </div>
                </div>
        )
    }).filter(el => inStockArray.includes(el.props.id))

    // customer stories random
    const [custStories, setCustStories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/api/stories")
        .then(res => {
            setCustStories(res.data)
        })
    }, [])

    let custStoriesArray = []
    for (let i= 0; i < 4; i++) {
        custStoriesArray.push(Math.ceil(Math.random() * 10))
    }
    let custStoriesItems = custStories.map((el, i) =>{
        return (
            <div id={i} key={i} className="bs-card card" style={{ width: "18rem" }}>
                <img src={el.cust_img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{el.cust_name}</h5>
                        <p className="card-text">{el.cust_test}</p>
                    </div>
                </div>
        )
    }).filter(el => custStoriesArray.includes(el.props.id))

    // coming soon random
    const [comingSoon, setComingSoon] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/api/comingsoon")
        .then(res => {
            setComingSoon(res.data)
        })
    }, [])

    let comingSoonArray = []
    for (let i= 0; i < 4; i++) {
        comingSoonArray.push(Math.ceil(Math.random() * 10))
    }
    let comingSoonItems = comingSoon.map((el, i) =>{
        return (
            <div id={i} key={i} className="bs-card card" style={{ width: "18rem" }}>
                <img src={el.cs_img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{el.cs_name}</h5>
                        <p className="card-text">{el.cs_desc}</p>
                        <p className="casrd-text">{el.cs_price}</p>
                        <Link to={`/ComingSoonSingle/${el.id}`} className="btn btn-primary bs-button">Coming Soon</Link>
                    </div>
                </div>
        )
    }).filter(el => comingSoonArray.includes(el.props.id))

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
                {custStoriesItems}
            </div>
        </section>
        <section className="coming-soon container">
            <div className="row">
                <h2 className="main-header">
                    Items Coming Soon!
                </h2>
                {comingSoonItems}
            </div>
        </section>
    </main>
    )
}