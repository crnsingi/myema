import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Design",
      description: "We design intuitive user experience and interfaces that enhance user engagements.",
      icon: "https://ext.same-assets.com/1001059003/3574948931.svg",
      features: [
        "Product Design",
        "UX Research",
        "UX/UI Design",
        "Responsive Web Design (RDW)",
        "Wireframing and Prototyping",
      ],
      link: "/services/ux-ui-design/",
    },
    {
      title: "Development",
      description: "Bespoke web development services that respond to your business needs.",
      icon: "https://ext.same-assets.com/1001059003/4031857793.svg",
      features: [
        "Product Engineering",
        "Digital Transformation",
        "Mobile Apps",
        "Web Development",
        "Application Modernization",
      ],
      link: "/services/web-development/",
    },
    {
      title: "Cloud and DevOps",
      description: "Flexible and agile cloud and DevOps services for your business applications.",
      icon: "https://ext.same-assets.com/1001059003/1966808434.svg",
      features: [
        "Serverless Architecture",
        "AWS Cloud",
        "Google Cloud",
        "Azure",
        "Docker",
      ],
      link: "/services/cloud-and-devops/",
    },
    {
      title: "Data Analytics",
      description: "Perform enterprise-level data analysis and visualize in intuitive dashboards.",
      icon: "https://ext.same-assets.com/1001059003/2883279204.svg",
      features: [
        "Data Visualization",
        "Dashboards",
        "Data Warehousing",
        "Power BI reporting",
        "Power BI embedded",
      ],
      link: "/services/data-visualization-consulting-company/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-imenso">
        <div className="mb-16">
          <h3 className="text-sm uppercase text-imenso-gray font-medium tracking-wider mb-2">Capabilities</h3>
          <h2 className="text-2xl md:text-3xl text-imenso-blue font-bold max-w-4xl">
            We build and deploy world-class IT products. Our on demand teams can design, build, deploy and scale your business in most efficient way.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-imenso-lightGray p-6 rounded-md">
              <div className="mb-4">
                <Image src={service.icon} alt={service.title} width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-imenso-blue mb-2">{service.title}</h3>
              <p className="text-imenso-gray mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-imenso-gray">{feature}</li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="inline-flex items-center text-sm font-medium text-imenso-blue hover:text-imenso-red transition-colors"
              >
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
