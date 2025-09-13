import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((s) => !s);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header-wrapper">
          {/* Header Logo (removed text) */}
          <div className="header-logo" aria-label="site-logo" />

          {/* Header Nav */}
          <div className="header-nav">
            {/* Menu Toggle */}
            <button
              type="button"
              onClick={toggleMenu}
              className="button button-sm button-dot button-white"
            >
              <span data-text="Menu">Menu</span>
            </button>

            {/* Menu */}
            <div ref={menuRef} className={`nav-box ${isMenuOpen ? 'show' : ''}`}>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/#about">
                    <i className="bi bi-arrow-right"></i>About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#featured">
                    <i className="bi bi-arrow-right"></i>Featured Videos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#gallery">
                    <i className="bi bi-arrow-right"></i>Featured Images
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#use-cases">
                    <i className="bi bi-arrow-right"></i>Use Cases
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/#contact">
                    <i className="bi bi-arrow-right"></i>Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>{' '}
          {/* end header-nav */}
        </div>{' '}
        {/* end header-wrapper */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default Header;
