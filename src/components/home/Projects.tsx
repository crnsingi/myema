import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Social media platform for artists and music lovers",
      image: "https://ext.same-assets.com/1001059003/898401576.png",
      features: [
        "Membership",
        "Manage Booking and Tickets",
        "Event venue listings",
        "Feedback radio integration",
      ],
      link: "/work/social-media-platform-for-artists-and-music-lovers/",
    },
    {
      title: "A comprehensive Power BI dashboard for shipping industry insights",
      image: "https://ext.same-assets.com/1001059003/780171315.png",
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
      features: [
        "Serverless auto SMS scheduling",
        "Twilio SMS integration",
        "Custom URL shortener",
        "Pay with Credit card, Amazon Pay and Apple Pay",
      ],
      link: "/work/send-bulk-sms-to-recover-payment-from-patients/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-imenso">
        <div className="text-center mb-16">
          <span className="text-sm uppercase text-imenso-gray font-medium tracking-wider mb-2 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-imenso-blue">
            Creating next generation digital products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-[200px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-imenso-blue mb-4">
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

        <div className="text-center mt-12">
          <Link
            href="/work/"
            className="inline-block border border-imenso-blue text-imenso-blue px-6 py-3 rounded-md font-medium hover:bg-imenso-blue hover:text-white transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
