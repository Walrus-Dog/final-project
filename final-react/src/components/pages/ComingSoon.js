import React from "react";

export default function ComingSoon(props) {
    const items = props.props;

    const comingSoonElements = items.map(item => {
        return (
            <section class="coming-soon container">
            <div class="row">
                <div class="bs-card card" style={{ width: "18rem" }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{item.cs_name}</h5>
                        <p class="card-text">{item.cs_desc}</p>
                        <p className="card-text">{item.cs_price}</p>
                        <a href="#" class="btn btn-primary bs-button">Take a look!</a>
                    </div>
                </div>
            </div>
        </section>
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