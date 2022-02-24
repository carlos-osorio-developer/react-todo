import { React, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

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
        <button type="button" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose style={{ color: '#fff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#fff', width: '30px', height: '30px' }} />
          )}
        </button>
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
