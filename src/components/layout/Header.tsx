"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
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
              src="https://media.licdn.com/dms/image/v2/D4D3DAQHTNmNR8IVlTw/image-scale_127_750/B4DZYpVr7_G8AM-/0/1744450273399/ema_ao_cover?e=1749456000&v=beta&t=YuRX4i9xWCuw_ihZm3URh7oUcgouF9oWDVevNmS20Hk"
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
                <Link href={item.href || "#"} className="text-imenso-blue hover:text-imenso-red transition-colors">
                  {item.title}
                </Link>
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
                <Link href={item.href || "#"} className="block text-imenso-blue font-medium">
                  {item.title}
                </Link>
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