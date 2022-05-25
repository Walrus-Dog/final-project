import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ComingSoonSingle() {

    const [csSingleItem, setCsSingleItem] = React.useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/api/comingsoon/${id}`)
        .then(res => {setCsSingleItem(res.data)})
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src={csSingleItem.cs_img} className="single-img img-fluid" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="bs-card-single card" style={{ width: "40rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{csSingleItem.cs_name}</h5>
                            <p className="card-text">{csSingleItem.cs_desc}</p>
                            <p className="card-text">{csSingleItem.cs_price}</p>
                            <a href={csSingleItem.id} className="btn btn-primary bs-button">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}