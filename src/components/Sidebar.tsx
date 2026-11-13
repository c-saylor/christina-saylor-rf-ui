import React from 'react';
import { Link, useLocation } from 'react-router';
import logo from '../assets/images/logo.svg';
import summitIcon from '../assets/icons/summit-logo.svg';
import Search from './Search';
import { navItems } from '../config/navItems';

function Sidebar() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <div className="Sidebar">
      <div className="Sidebar-left">
        <img src={logo} className="App-logo" alt="RainFocus" />
        {/* TO-DO - organizations should be iterated through from a list of orgs (assuming more) and the icons should be nav anchors */}
        <div className="organizations">
          <img src={summitIcon} className="summit-icon" alt="RainFocus Summit" />
        </div>
        {/* TO-DO - user avatar is a placeholder; wire up to the user menu/profile */}
        <div className="user-icon" role="img" aria-label="Signed in as FL">
          FL
        </div>
      </div>
      <div className="Sidebar-right">
        <p className="Title">RainFocus Summit</p>
        <p className="Details">Lehi, UT &middot; December 15th</p>
        <Search />
        <nav className="Mega-nav">
          <ul>
            {navItems.map((item) => {
              const isSelected = isActive(item.path);
              return (
                <li key={item.path} className={isSelected ? 'selected' : undefined}>
                  <svg
                    className="nav-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <circle cx="7" cy="7" r="7" fill="currentColor" />
                  </svg>
                  <Link
                    to={item.children?.[0]?.path ?? item.path}
                    aria-current={isSelected && !item.children ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                  {isSelected && item.children && (
                    <ul className="Sub-nav">
                      {item.children.map((sub) => (
                        <li key={sub.path} className={isActive(sub.path) ? 'selected' : undefined}>
                          <Link
                            to={sub.path}
                            aria-current={isActive(sub.path) ? 'page' : undefined}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
