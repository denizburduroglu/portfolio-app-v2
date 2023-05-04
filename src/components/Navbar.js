import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <span className="font-semibold text-xl tracking-tight">My Logo</span>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-gray-900 hover:border-gray-900">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">
            About
          </a>
          <a to="/experience" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">
            Experience
          </a>
          <a to="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900 mr-4">
            Projects
          </a>
          <a to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
