import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchBar({ placeholder, data}) {

    const [inStockData, setInStockData] = React.useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/api/instock`)
        .then(res => {setInStockData(res.data)})
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = inStockData.filter((value) => {
            return value.name.includes(searchWord);
        });
        setInStockData(newFilter);
    }

    return (
        <div className="search-div">
            <form action="./products" className="shop-list-search-form" name="search" method="get" acceptCharset="utf8" id="shopListSearchForm">
                <input type="hidden" name="utf8" value="✓" />
                <label className="sr-only" htmlFor="search">Search products</label>
                <input className="search-input" id="searchInput" name="search" placeholder={placeholder} type="text" autoComplete="on" onChange={handleFilter} />
                {inStockData.length != 0 && (
                    <div className="search-result">
                        {inStockData.map((el, key) => {
                            return <a className="data-item" href={`/InStockSingle/${el.id}`}>
                                <p>{el.is_name}</p>
                            </a>
                        })}
                    </div>
                )}
            </form>
        </div>
    )
}