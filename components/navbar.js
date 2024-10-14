"use client"; // Add this to the top of your file

import { useEffect } from 'react';
import './styles.css';

export default function NavBar() {
  useEffect(() => {
    // This runs only on the client side
    const navTrigger = document.querySelector('.navTrigger');
    const mainListDiv = document.getElementById("mainListDiv");
    const nav = document.querySelector('.nav');

    if (navTrigger && mainListDiv && nav) {
      navTrigger.addEventListener('click', function() {
        this.classList.toggle('active');
        console.log("Clicked menu");
        mainListDiv.classList.toggle('show_list');
        mainListDiv.style.display = "block";
      });

      window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 50) {
          nav.classList.add('affix');
          console.log("OK");
        } else {
          nav.classList.remove('affix');
        }
      });
    }

    // Cleanup the event listeners on component unmount
    return () => {
      if (navTrigger) {
        navTrigger.removeEventListener('click', () => {});
      }
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="logo">
            <a href="#">e-Web Store</a>
          </div>
          <div id="mainListDiv" className="main_list">
            <ul className="navlinks">
              <li><a href="#">About</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <span className="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
    </>
  );
}
