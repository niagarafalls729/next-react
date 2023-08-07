"use client"; // 클라이언트 사이드로 마킹

import Link from "next/link";
import { useState } from 'react'  
import  './nav.css';
import Image from 'next/image'

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    console.log("showNavbar:::",showNavbar)
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link href="/">
          <Image
            alt="logo"
            height="50"
            width="100"
            priority // or priority={true}
            src="/logo.png"
          />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <button>dddddddddddd</button>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li> 
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/contact">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;
