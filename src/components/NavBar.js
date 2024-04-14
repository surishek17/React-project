/*All the pages are added here*/ 
import React from 'react'
import './NavBar.css';
import '../pages/addSales';
import '../pages/top5';
import '../pages/todayRevenue';
import '../pages/login';
import '../pages/register';
import '../pages/logout';


const navBar = () => {
    return (
        <div>
            {/* <h1>Navbar mai aap ka swagat hai</h1> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">SALES APP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">ADD SALES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/top5">TOP 5 SALES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/todayRevenue">TODAY'S TOTAL REVENUE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">REGISTER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="logout">LOGOUT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default navBar;