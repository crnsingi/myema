import React from "react";
import Image from "next/image";

const Technologies = () => {
  const techCategories = [
    {
      name: "",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-imenso-lightGray">
      <div className="container-imenso">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-imenso-blue mb-4">
            Cutting edge technologies for your business success
          </h2>
        </div>

        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm uppercase text-imenso-gray font-medium tracking-wider mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;