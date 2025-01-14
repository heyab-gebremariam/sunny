import React from "react";
import { useLocation } from 'react-router-dom';


export const Header = () =>{
    const location = useLocation();
    const isActive = (path) => location.pathname === path

    return (
        <header class="site-navbar light js-sticky-header site-navbar-target shrink" role="banner">
            <div class="container navContainer">
            <div class="row align-items-center">

                <div class="col-6 col-xl-3">
                <div class="mb-0 site-logo">
                    <a href="/home" class="mb-0">
                        <img src="/logo.png"/>
                    </a></div>
                
                </div>

                <div class="col-12 col-xl-9 d-none d-xl-block">
                <nav class="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                        <li>
                        <a href="/home" className={isActive('/home') ? 'active nav-link' : 'nav-link'}>
                            Home
                        </a>
                        </li>
                        <li>
                        <a href="/about" className={isActive('/about') ? 'active nav-link' : 'nav-link'}>
                            About Us
                        </a>
                        </li>
                        <li>
                        <a href="/services" className={isActive('/services') ? 'active nav-link' : 'nav-link'}>
                            Amenities
                        </a>
                        </li>
                        <li>
                        <a href="/menu" className={isActive('/menu') ? 'active nav-link' : 'nav-link'}>
                            Menu
                        </a>
                        </li>
                        <li>
                        <a href="/lifestyle" className={isActive('/lifestyle') ? 'active nav-link' : 'nav-link'}>
                            Lifestyle
                        </a>
                        </li>
                        <li>
                        <a href="/contact" className={isActive('/contact') ? 'active nav-link' : 'nav-link'}>
                            Contact Us
                        </a>
                    </li>
                    <li class="social"><a href="#" class="nav-link"><span class="icon-facebook"></span></a></li>
                    <li class="social"><a href="#" class="nav-link"><span class="icon-twitter"></span></a></li>
                    <li class="social"><a href="#" class="nav-link"><span class="icon-linkedin"></span></a></li>
                    </ul>
                </nav>
                </div>


                <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" className="headerLink"><a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3 text-white"></span></a></div>

            </div>
            </div>

        </header>
    )
}