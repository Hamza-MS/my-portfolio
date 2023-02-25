import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white w-full border-b border-gray-200 fixed top-0">

        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">Home</a>
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">About</a>
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">Contact</a>
        </div>
   
</nav>

  );
};

export default NavBar;



