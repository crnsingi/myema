import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectCategories = [
  { name: "All", href: "/work/" },
  { name: "Product Engineering", href: "/work-service/product-engineering/" },
  { name: "Data Analytics", href: "/work-service/data-analytics/" },
  { name: "Web Development", href: "/work-service/web-development/" },
  { name: "SaaS Applications", href: "/work-service/saas-applications/" },
  { name: "Software Modernization", href: "/work-service/software-modernization/" },
  { name: "UX/UI Design", href: "/work-service/ux-ui-design/" },
  { name: "Mobile Apps", href: "/work-service/mobile-apps/" },
];

const projects = [
  {
    title: "Business intelligence dashboard for legal industry",
    image: "https://ext.same-assets.com/1001059003/2703226261.png",
    category: "Legal",
    features: [
      "Single Sign-On (SSO)",
      "Advanced filters to apply multiple levels of filtering",
      "Data Transform Algorithm",
      "Export button to obtain your customized PDF.",
    ],
    link: "/work/business-intelligence-dashboard-for-legal-industry/",
  },
  {
    title: "Rental booking solution for medical equipment's",
    image: "https://ext.same-assets.com/1001059003/534456949.png",
    category: "Healthcare",
    features: [
      "Rental booking management",
      "Custom availability chart",
      "Order tracking",
      "Lead management",
    ],
    link: "/work/rental-booking-solution-for-medical-equipments/",
  },
  {
    title: "SaaS-Based onboarding guide creation platform",
    image: "https://ext.same-assets.com/1001059003/2563688514.png",
    category: "EdTech",
    features: [
      "Automated script generation",
      "Interactive walkthrough",
      "Track guide completion rates",
      "User Management",
    ],
    link: "/work/saas-based-onboarding-guide-creation-platform/",
  },
  {
    title: "An innovative tracking system for automotive excellence",
    image: "https://ext.same-assets.com/1001059003/3927428586.png",
    category: "Automotive",
    features: [
      "Custom View",
      "Customer Relationship Management (CRM)",
      "Power Automate workflow",
      "Documnet Management and Approval",
    ],
    link: "/work/an-innovative-tracking-system-for-automotive-excellence/",
  },
  {
    title: "A comprehensive Power BI dashboard for shipping industry insights",
    image: "https://ext.same-assets.com/1001059003/780171315.png",
    category: "Logistics",
    features: [
      "Row-Level Security (RLS)",
      "Conditional formatting",
      "Synchronizing slicers",
      "Scheduled data refreshes",
    ],
    link: "/work/a-comprehensive-power-bi-dashboard-for-shipping-industry-insights/",
  },
  {
    title: "Send bulk SMS to recover payment from patients",
    image: "https://ext.same-assets.com/1001059003/3981843256.jpeg",
    category: "Healthcare",
    features: [
      "Serverless auto SMS scheduling",
      "Twilio SMS integration",
      "Custom URL shortener",
      "Pay with Credit card, Amazon Pay and Apple Pay",
    ],
    link: "/work/send-bulk-sms-to-recover-payment-from-patients/",
  },
];

export default function Work() {
  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-imenso-lightGray relative overflow-hidden">
        <div className="container-imenso">
          <div className="text-center mb-12">
            <span className="text-sm uppercase text-imenso-gray font-medium tracking-wider block mb-2">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-imenso-blue">
              Creating next generation digital products
            </h1>
          </div>

          {/* Filter categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className={`px-4 py-2 rounded-full text-sm ${
                  index === 0
                    ? "bg-imenso-blue text-white"
                    : "bg-white text-imenso-darkGray hover:bg-imenso-lightGray"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-[220px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-imenso-red font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-imenso-blue mb-4 min-h-[60px]">
                    {project.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-imenso-gray">• {feature}</li>
                    ))}
                  </ul>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
