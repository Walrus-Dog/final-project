import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function InStockSingle() {

    const [isSingleItem, setIsSingleItem] = React.useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/api/instock/${id}`)
        .then(res => res.json())
        .then(data => setIsSingleItem(data))
    }, [])

    return (
        <div className="col-md-3">
                        <div className="bs-card card" style={{ width: "18rem" }}>
                            <img src="/media/db-images/comingsoon/worry.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{isSingleItem.is_name}</h5>
                                <p className="card-text">{isSingleItem.is_desc}</p>
                                <p className="card-text">{isSingleItem.is_price}</p>
                                <a href={isSingleItem.is_id} className="btn btn-primary bs-button">Buy Now</a>
                            </div>
                        </div>
                    </div>
    )
}