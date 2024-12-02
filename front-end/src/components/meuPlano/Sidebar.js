"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col ${isOpen ? "w-64" : "w-20"} bg-gray-800 min-h-screen transition-all duration-300`}>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <button
            onClick={toggleSidebar}
            className="text-white p-4 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? "Close" : "Open"}
          </button>
          <nav className="flex flex-col mt-4">
            <Link href="/" className="text-gray-200 hover:bg-gray-700 p-4">
              Dashboard
            </Link>
            <Link href="/" className="text-gray-200 hover:bg-gray-700 p-4">
              Meu Plano
            </Link>
            <Link href="/" className="text-gray-200 hover:bg-gray-700 p-4">
              Configurações
            </Link>
          </nav>
        </div>

        {/* Seção Inferior */}
        <div className="flex flex-col items-center mb-4 mt-auto">
          <Link href="/" className="text-gray-200 hover:bg-gray-700 p-4">
            +
          </Link>
          <Link href="/" className="text-gray-200 hover:bg-gray-700 p-4">
            Configurações
          </Link>
          <button className="text-gray-200 hover:bg-gray-700 p-4">
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;