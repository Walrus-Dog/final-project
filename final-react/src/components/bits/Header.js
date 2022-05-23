import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

export default function Header() {

    return (
        <header id="header" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="headertext container">
                            <a href="/">
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
                                            <SearchBar placeholder="Search..." />
                                        </li>
                                        <li className="shop-list-item">
                                            <a href="/Instock">All Products</a>
                                        </li>
                                        <li className="shop-list-item">
                                            <a href="/ComingSoon">Coming Soon</a>
                                        </li>
                                    
                                </div>
                                <div className="col-md-5 about-nav">
                                    <h3 className="nav-title">About</h3>
                                    <ul className="about-list">
                                        <li className="aboutlist-item">
                                            <a href="/Info">Info</a>
                                        </li>
                                        <li className="aboutlist-item">
                                            <a href="/">Back to Home</a>
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