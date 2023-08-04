"use client"; // 클라이언트 사이드로 마킹

import Link from "next/link";
import { useState } from 'react'  
import  './nav.css';
import Image from 'next/image'

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link href="/">
          <Image src="/logo.png"  width="120" height="50" alt="logo"/>
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
