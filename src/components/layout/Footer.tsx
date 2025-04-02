"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const serviceSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "UI/UX Design", href: "/services/ux-ui-design" },
        { name: "Software Testing", href: "/services/software-testing-company" },
        { name: "Mobile App Development", href: "/services/mobile-apps" },
        { name: "Cloud & DevOps", href: "/services/cloud-and-devops" },
        { name: "Support and Maintenance", href: "/services/application-maintenance-support" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { name: "Backend", href: "#" },
        { name: "NodeJS Development", href: "/technologies/node-js-development-company" },
      ],
    },
    {
      title: "CMS & eCommerce",
      links: [
        { name: "Shopify Development", href: "/technologies/shopify-development-company" },
      ],
    },
    {
      title: "Frontend",
      links: [
        { name: "React JS Development", href: "/technologies/react-js-development-company" },
        { name: "Angular JS Development", href: "/technologies/angular-js-development-company" },
      ],
    },
    {
      title: "Mobile Apps",
      links: [
        { name: "React Native Development", href: "/technologies/react-native-development-company" },
        { name: "Android App Development", href: "/technologies/android-development-company" },
        { name: "iOS App Development", href: "/technologies/ios-development-company" },
      ],
    },
  ];

  const dedicatedTeamSections = [
   
    {
      title: "Full Stack Developers",
      links: [
        { name: "MEAN Stack Developers", href: "/developers/hire-mean-stack-developers" },
        { name: "MERN Stack Developers", href: "/developers/hire-mern-stack-developers" },
      ],
    },
  ];

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/work" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/myema-ao/" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/imensosoftware/" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/imensosoftware" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/imensosoftware/" },
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

        {/* Main footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First service section (wider) */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-imenso-darkGray mb-4">{serviceSections[0].title}</h3>
            <ul className="space-y-2">
              {serviceSections[0].links.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <ul className="space-y-2 mt-12">
              {serviceSections[0].links.slice(6).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies section */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-imenso-darkGray mb-4">{serviceSections[1].title}</h3>
            <ul className="space-y-2">
              {serviceSections[1].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-imenso-darkGray mt-6 mb-4">{serviceSections[2].title}</h3>
            <ul className="space-y-2">
              {serviceSections[2].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend and Mobile Apps */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-imenso-darkGray mb-4">{serviceSections[3].title}</h3>
            <ul className="space-y-2">
              {serviceSections[3].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-imenso-darkGray mt-6 mb-4">{serviceSections[4].title}</h3>
            <ul className="space-y-2">
              {serviceSections[4].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dedicated Teams */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-imenso-darkGray mb-4">{dedicatedTeamSections[0].title}</h3>
            <ul className="space-y-2">
              {dedicatedTeamSections[0].links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-imenso-gray hover:text-imenso-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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
              &copy; {new Date().getFullYear()} MyEma Software. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
