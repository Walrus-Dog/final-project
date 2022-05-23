import React from "react";
import { Link } from "react-router-dom"

export default function ComingSoon(props) {
    const items = props.props;

    const comingSoonElements = items.map(item => {
        return (
            <div className="col-md-3">
                <div class="bs-card card" style={{ width: "18rem" }}>
                    <img src={item.cs_img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.cs_name}</h5>
                        <p class="card-text">{item.cs_desc}</p>
                        <p className="card-text">{item.cs_price}</p>
                        <Link to={`/ComingSoonSingle/${item.id}`} className="btn btn-primary bs-button">Coming Soon</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <h2 className="main-header">Soon to be in stock!</h2>
                {comingSoonElements}
            </div>
        </div>
    )
}