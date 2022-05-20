import React from "react";
// import bigman from "../../media/db-images/comingsoon/bigman.jpg"

export default function InStock(props) {
    const items = props.props;
    console.log(items)
    // const itemElements = items.map(item => {
    //     return <h5>{item.is_name}</h5>
        
    // })
    const inStockElements = items.map(item => {
        return (
            // <div className="featured-products-section">
                // <div className="">
                    <div className="col-md-3">
                        <div className="bs-card card" style={{ width: "18rem" }}>
                            <img src="/media/db-images/comingsoon/worry.png" className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.is_name}</h5>
                                <p className="card-text">{item.is_desc}</p>
                                <p className="card-text">{item.is_price}</p>
                                <a href={item.is_id} className="btn btn-primary bs-button">Buy Now</a>
                            </div>
                        </div>
                    </div>
                // </div>
            // </div>
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