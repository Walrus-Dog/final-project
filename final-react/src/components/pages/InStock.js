import React from "react";
import { Link } from "react-router-dom";

export default function InStock(props) {
    const items = props.props;
    
    const inStockElements = items.map(item => {
        return (
            <div className="col-md-3">
                <div className="bs-card card" style={{ width: "18rem" }}>
                    <img src={item.is_img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.is_name}</h5>
                        <p className="card-text">{item.is_desc}</p>
                        <p className="card-text">{item.is_price}</p>
                        <Link to={`/InStockSingle/${item.id}`} className="btn btn-primary bs-button">Buy Now!</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <h2 className="main-header">All of our in stock items</h2>
                {inStockElements}
            </div>
        </div>
    )
}