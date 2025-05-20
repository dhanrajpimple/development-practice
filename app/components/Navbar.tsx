import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@remix-run/react";
import logo from "../assests/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useLocation();

  const navItems = ["Home", "Solutions", "Services", "Company", "Contact"];

  // Generate the href for a nav item
  const getLink = (item) => (item === "Home" ? "/" : `/${item.toLowerCase()}`);

  return (
    <nav className="w-full border-b border-blue-300 bg-white shadow-md rounded-b-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-24">
          {/* Logo */}
          <Link to="/">
            <a className="flex items-center" onClick={() => setIsOpen(false)}>
              <img src={logo} alt="logo" className="h-10 m-4 md:h-16" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const href = getLink(item);
              const isActive = router.pathname === href;
              return (
                <Link key={item} to={href}>
                  <a
                    className={`transition-colors ${
                      isActive
                        ? "text-purple-700 font-bold"
                        : "text-gray-700 hover:text-purple-700"
                    }`}
                  >
                    {item}
                  </a>
                </Link>
              );
            })}
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-purple-700 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/">
              <a onClick={() => setIsOpen(false)}>
                <img src={logo} alt="logo" className="h-14" />
              </a>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-purple-700 transition"
            >
              <X size={28} />
            </button>
          </div>
          <div className="p-4 space-y-4">
            {navItems.map((item) => {
              const href = getLink(item);
              const isActive = router.pathname === href;
              return (
                <Link key={item} to={href}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg transition ${
                      isActive
                        ? "text-purple-700 font-bold"
                        : "text-gray-700 hover:text-purple-700"
                    }`}
                  >
                    {item}
                  </a>
                </Link>
              );
            })}
            <button className="w-full bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
