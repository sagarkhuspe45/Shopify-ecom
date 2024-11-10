import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav">
        <Link className="navbar-brand" to="/">
          Shopify
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form className="d-flex search" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/Products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/Categories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Login">
                <FontAwesomeIcon icon={faUser}/> Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Cart">
               <FontAwesomeIcon icon={faShoppingCart}/>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/Night">
                <FontAwesomeIcon icon={faMoon}/> 
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}
