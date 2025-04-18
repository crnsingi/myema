import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import React from "react";

export default function About() {
  const stats = [
    {
      number: "2+",
      label: "Years of Experience",
      description: "In these years we build solid foundation in various areas of information technology that helps us to deliver exceptional results."
    },
    {
      number: "10+",
      label: "Team Members",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQE0k6sKkM81bA/company-logo_100_100/B4DZYBBn4gG8AQ-/0/1743773927702/ema_ao_logo?e=1749686400&v=beta&t=_j74P_5mG5Y47M_ASW5myVSopdmO2YnZdQYxGynlJK0"
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Our high client retention rate shows our commitment to quality, customer service, and long-term partnerships."
    },
  ];

  const values = [
    {
      title: "Top Notch Developers",
      description: "We hire best developers that are not just good in technical skills but have the ability to collaborate, learn and adapt to new technologies."
    },
    {
      title: "Strong Company Culture",
      description: "Our positive and vibrant company culture creates an environment where employees feel engaged, motivated and inspired to do their best work."
    },
    {
      title: "Result Oriented Approach",
      description: "Our result-oriented approach helps in driving efficiency, productivity, and success in projects and creating value for our clients."
    }
  ];

  const services = [
    {
      title: "Creative Collaboration",
      description: "We work together with our clients to generate innovative ideas, solve complex problems, and create unique and impactful solution that bring value to their business."
    },
    {
      title: "Team Extension",
      description: "We have vetted developers that quickly scale your teams without long-term commitment and overhead costs associated with traditional hiring."
    },
    {
      title: "Tech Partners",
      description: "You can leverage our specialized knowledge, resources, and capabilities to enhance the technological aspects of your business by our tech partnership."
    },
    {
      title: "Flexible Engagement Models",
      description: "Imenso offers engagement models tailored to your specific needs. From fixed cost to dedicated teams we have flexible pricing options."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-imenso-lightGray relative overflow-hidden">
        {/* Background diagonal lines */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://ext.same-assets.com/1001059003/4248696089.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="container-imenso relative z-10">
          <div className="text-center">
            <span className="text-imenso-red font-medium">#Ema</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-imenso-blue mt-4 mb-6">
              Ema is all about people
            </h1>
            <p className="text-lg md:text-xl text-imenso-gray max-w-3xl mx-auto">
              It's not numbers or products or services, its our people who defines our success.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFy7X_T8O5t4A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1708294694781?e=1749081600&v=beta&t=p7w_2iPxjw2gE-oG31WkaMMDZd0QOzn4btCfFiylgJs" 
                    alt="Cesar Nsingi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium text-imenso-blue">Cesar Nsingi</p>
                  <p className="text-sm text-imenso-gray">Founder and CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-imenso">
          <h2 className="text-3xl md:text-4xl font-bold text-imenso-blue mb-12 text-center">
            A team of top developers with strong company culture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Box - Stats */}
            <div className="bg-imenso-blue text-white p-8 rounded-lg flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-bold mb-2">{stats[0].number}</div>
              <div className="text-lg font-medium mb-4">{stats[0].label}</div>
              <p className="text-sm text-gray-300">{stats[0].description}</p>
            </div>

            {/* Middle Box - Image */}
            <div className="rounded-lg overflow-hidden relative h-[300px]">
              <Image
                src={stats[1].image}
                alt="Team Culture"
                fill
                className="object-cover"
              />
            </div>

            {/* Last Box - Stats */}
            <div className="bg-imenso-orange text-white p-8 rounded-lg flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-bold mb-2">{stats[2].number}</div>
              <div className="text-lg font-medium mb-4">{stats[2].label}</div>
              <p className="text-sm text-gray-300">{stats[2].description}</p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-bold text-imenso-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-imenso-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-imenso-lightGray">
        <div className="container-imenso">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-imenso-blue mb-8">
              Ema provides spectrum of high quality IT services
            </h2>
            <p className="text-lg text-imenso-gray max-w-3xl mx-auto">
              by collaborating with businesses across the globe as their tech partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-imenso-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-imenso-gray">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
