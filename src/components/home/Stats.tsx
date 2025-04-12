import React from "react";

const Stats = () => {
  const stats = [
    {
      number: "2+",
      label: "Years of Experience",
    },
    {
      number: "10+",
      label: "Team Members",
    },
    {
      number: "95%",
      label: "Client Retention",
    },
    {
      number: "4.7+",
      label: "Google Rating",
    },
  ];

  return (
    <section className="py-12 bg-imenso-blue">
      <div className="container-imenso">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
