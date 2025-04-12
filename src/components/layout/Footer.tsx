"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/myema-ao/" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=100070673807098" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/czr_ricardo" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/myema.ao/" },
  ];

  return (
    <footer className="bg-white pt-10 pb-6">
      <div className="container-imenso">
        {/* Logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/1001059003/320825748.svg"
                alt="Imenso Software"
                width={120}
                height={40}
              />
            </Link>
            <div className="mt-2 flex items-center">
              <span className="text-imenso-blue text-sm">THINK BIG</span>
            </div>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-imenso-gray hover:text-imenso-blue transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom footer links */}
        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-imenso-gray hover:text-imenso-red transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="text-sm text-imenso-gray">
              © {new Date().getFullYear()} MyEma Software. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;