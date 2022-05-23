import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function InStockSingle() {

    const [isSingleItem, setIsSingleItem] = React.useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/api/instock/${id}`)
        .then(res => {setIsSingleItem(res.data)})
    }, [])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={isSingleItem.is_img} className="card-img-top img-fluid" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="bs-card card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{isSingleItem.is_name}</h5>
                            <p className="card-text">{isSingleItem.is_desc}</p>
                            <p className="card-text">{isSingleItem.is_price}</p>
                            <a href={isSingleItem.id} className="btn btn-primary bs-button">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}