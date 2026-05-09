import React from "react"
import { navLinks } from "../constants"

const NavBar = () => {
  return (
    <header className="site-header">
      <nav className="nav-shell">
     
        <a className="brand" href="/">
          <img src="/logo.svg" alt="Apple logo" />
        </a>
       
       <ul className="nav-links">

          {navLinks.map(({ label }) => (

            <li key={label}>
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}

        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
           
      </nav>
    </header>
  )
}

export default NavBar
