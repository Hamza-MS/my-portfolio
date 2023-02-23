import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white w-full border-b border-gray-200 fixed top-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow logo" />
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">Home</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">About</a>
          <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">Contact</a>
        </div>
      </div>
    </div>
  </div>
</nav>

  );
};

export default NavBar;



