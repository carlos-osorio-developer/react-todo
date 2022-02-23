import { React, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: 'about',
      text: 'About',
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navBar">
        <input
          type="button"
          value={isOpen ? 'Close' : 'Open'}
          onClick={toggleMenu}
        />
        <ul className={`menuNav ${isOpen ? 'showMenu' : ''}`}>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                onClick={toggleMenu}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;
