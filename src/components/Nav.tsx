import React from 'react';

export default function Navbar() {
  return (
    <div className="drawer">
      {/* Hidden toggle checkbox */}
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main content */}
      <div className="drawer-content">
        <nav className="navbar bg-base-100">
          {/* Menu Button */}
          <div className="navbar-start">
            <label htmlFor="menu-drawer" className="btn btn-square btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
            {/* Logo */}
            <a className="btn btn-ghost normal-case text-xl">网站名称/Logo</a>
          </div>
          
          {/* Centered Menu Items */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/page1">页面1</a></li>
              <li><a href="/page2">页面2</a></li>
              <li><a href="/page3">页面3</a></li>
            </ul>
          </div>
          
          {/* Additional Right-Aligned Items (可选) */}
          <div className="navbar-end">
            <a className="btn">其它按钮</a>
          </div>
        </nav>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">
          <li className="menu-title">
            <span>菜单</span>
          </li>
          <li><a href="/page1">页面1</a></li>
          <li><a href="/page2">页面2</a></li>
          <li><a href="/page3">页面3</a></li>
        </ul>
      </div>
    </div>
  );
}
