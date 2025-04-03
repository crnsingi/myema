"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const menuItems = [
    {
      title: "Services",
      dropdown: true,
      id: "services",
      columns: [
        {
          items: [
            { name: "Web Development", href: "/services/web-development" },
            { name: "Mobile App Development", href: "/services/mobile-apps" },
          ],
        },
      ],
    },
    
    {
      title: "Technologies",
      dropdown: true,
      id: "technologies",
      sections: [
        {
          title: "Backend",
          items: [
            { name: "Nodejs", href: "/technologies/node-js-development-company" },
            
          ],
        },
      ],
    },
    {
      title: "Projects",
      href: "/work",
      dropdown: false,
    },
    {
      title: "About",
      href: "/about",
      dropdown: false,
    },

  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-imenso py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D3DAQFcHIINQBlOcg/image-scale_127_750/image-scale_127_750/0/1735391680802/myema_ao_cover?e=1744149600&v=beta&t=dAL2BUGwL-Y9HZx5Z9lLV6-QFos3TFgMg1RLOk15XHg"
              alt="MyEma"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center text-imenso-blue hover:text-imenso-red transition-colors"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : (
                  <Link href={item.href || "#"} className="text-imenso-blue hover:text-imenso-red transition-colors">
                    {item.title}
                  </Link>
                )}

                {/* Dropdown for Services */}
                {item.dropdown && item.id === "services" && activeDropdown === "services" && (
                  <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md p-6 grid grid-cols-2 gap-6">
                    {item.columns?.map((column, idx) => (
                      <div key={idx} className="space-y-3">
                        {column.items.map((subItem) => (
                          <Link
                            href={subItem.href}
                            key={subItem.name}
                            className="block text-imenso-darkGray hover:text-imenso-red transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropdown for Dedicated Teams and Technologies */}
                {item.dropdown && (item.id === "dedicated-teams" || item.id === "technologies") && activeDropdown === item.id && (
                  <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg rounded-md p-6">
                    <div className="grid grid-cols-4 gap-6">
                      {item.sections?.map((section) => (
                        <div key={section.title} className="space-y-3">
                          <h3 className="font-medium text-imenso-blue">{section.title}</h3>
                          {section.items.map((subItem) => (
                            <Link
                              href={subItem.href}
                              key={subItem.name}
                              className="block text-imenso-darkGray hover:text-imenso-red transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link href="/say-hello" className="hidden lg:block btn-primary">
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white pb-6">
          <div className="container-imenso space-y-4">
            {menuItems.map((item) => (
              <div key={item.title} className="border-t border-gray-100 pt-4">
                {item.dropdown ? (
                  <button
                    className="flex items-center justify-between w-full text-imenso-blue font-medium"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.id ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link href={item.href || "#"} className="block text-imenso-blue font-medium">
                    {item.title}
                  </Link>
                )}

                {/* Mobile dropdowns */}
                {item.dropdown && activeDropdown === item.id && (
                  <div className="mt-3 pl-4 space-y-4">
                    {item.id === "services" && item.columns?.map((column, idx) => (
                      <div key={idx} className="space-y-3">
                        {column.items.map((subItem) => (
                          <Link
                            href={subItem.href}
                            key={subItem.name}
                            className="block text-imenso-darkGray hover:text-imenso-red transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ))}

                    {(item.id === "dedicated-teams" || item.id === "technologies") && item.sections?.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h3 className="font-medium text-imenso-blue mt-4">{section.title}</h3>
                        {section.items.map((subItem) => (
                          <Link
                            href={subItem.href}
                            key={subItem.name}
                            className="block text-imenso-darkGray hover:text-imenso-red transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-gray-100">
              <Link href="/say-hello" className="btn-primary inline-block">
                Say hello
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
