import { useState } from "react";
import "../styles/navbar.css";
import "./Cronograma/App-cronograma";
import "./Cronograma/Board/context"
import "./Cronograma/Board/index"
import "./Cronograma/Board/styles"
import "./Cronograma/Card/index"
import "./Cronograma/Card/styles"
import "./Cronograma/Header/index"
import "./Cronograma/Header/styles"
import "./Cronograma/List/index"
import "./Cronograma/List/styles"
export default function Navbar() {
  const[isNavExpanded, setIsNavExpanded] = useState(false)
    return (
      <nav className="navigation">
        <a href="../App.js" class="logo"><span>Y</span>ou<span>R</span> <span>T</span>ea<span>M</span></a>

        <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
          <ul>
            <li>
              <a href="./Cronograma/App-cronograma">Cronograma</a>
            </li>
            <li>
              <a href="/contact">Equipe</a>
            </li>
            <li>
              <a href="/contact">Metas</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }