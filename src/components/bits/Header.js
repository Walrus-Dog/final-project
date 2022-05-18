import React from "react";

export default function Header() {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="headertext container">
                            <a href="#">
                                <span className="big-logo">WalDog</span>
                                <span className="small-logo sm-d-none">Shop</span>
                            </a>
                        </h1>
                        <p className="motto-text container">all the junk you'd never need</p>
                    </div>
                    <div className="col-md-7">
                        <nav className="top-nav nav" id="topNav" />
                            <div className="row">
                                <div className="col-md-7 shop-nav">
                                    <h3 className="nav-title">Shop</h3>
                                    <ul className="shop-list" id="shopList" />
                                        <li>
                                            <form action="./products" className="shop-list-search-form" name="search" method="get" acceptCharset="utf8" id="shopListSearchForm" />
                                                <input type="hidden" name="utf8" value="✓" />
                                                <label className="sr-only" htmlFor="search">Search products</label>
                                                <input className="search-input" id="searchInout" name="search" placeholder="Search..." type="text" autoComplete="off" />
                                        </li>
                                        <li className="shop-list-item">
                                            <a href="./allProdsPage.html">All Products</a>
                                        </li>
                                        <li className="shop-list-item">
                                            <a href="./comingSoon.html">Coming Soon</a>
                                        </li>
                                    
                                </div>
                                <div className="col-md-5 about-nav">
                                    <h3 className="nav-title">About</h3>
                                    <ul className="about-list">
                                        <li className="aboutlist-item">
                                            <a href="./info.html">Info</a>
                                        </li>
                                        <li className="aboutlist-item">
                                            <a href="./contact.html">Contact</a>
                                        </li>
                                        <li className="aboutlist-item">
                                            <a href="./index.html">Back to Home</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}