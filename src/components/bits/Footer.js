import React from "react";

export default function Footer() {
    return (
    <footer id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="socials-div col-9">
                        <ul className="socials-list nav nav-fill">
                            <li className="socials-list-item"><a href="who uses face book cmon now">
                                <svg className="icon icon-facebook2 social-icon"><use href="#icon-facebook2"></use></svg>
                            </a></li>
                            <li className="socials-list-item"><a target="_blank" href="https://twitter.com/WalrusDog">
                                <svg className="icon icon-twitter social-icon"><use href="#icon-twitter"></use></svg>
                            </a></li>
                            <li className="socials-list-item"><a target="_blank" href="#">
                                <svg className="icon icon-instagram social-icon"><use href="#icon-instagram"></use></svg>
                            </a></li>
                            <li className="socials-list-item"><a target="_blank" href="https://github.com/Walrus-Dog">
                                <svg className="icon icon-github social-icon"><use href="#icon-github"></use></svg>
                            </a></li>
                        </ul>
                    </div>
                    <div className="socials-div  col-3">
                        <p className="watermark" id="watermark">
                            site by<span className="watermark-name"><a target="_blank" href="https://github.com/Walrus-Dog"> waldog </a></span> &copy; 2022
                        </p>
                    </div>
                </div>
            </div>
    </footer>
    )
}