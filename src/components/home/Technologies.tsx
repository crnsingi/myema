import React from "react";
import Image from "next/image";

const Technologies = () => {
  const techCategories = [
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", image: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png"},
        { name: "Laravel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLusrEhuGwyB6Heq_sOUBnRbgXlm0iDF42A&s"},
        { name: "PHP", image: "data:image/png;base64,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"},
        { name: ".Net Core", image: "data:image/png;base64,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"},
      ],
    },
    {
      name: "Frontend",
      technologies: [
        { name: "React.js", image: "https://ext.same-assets.com/1001059003/451914131.webp" },
        { name: "Angular", image: "https://ext.same-assets.com/1001059003/684928198.webp"},
        { name: "Vue.js", image: "https://ext.same-assets.com/1001059003/2585049692.webp"},
        { name: "HTML5", image: "https://ext.same-assets.com/1001059003/1276546045.webp"},
      ],
    },
    {
      name: "Data Analytics",
      technologies: [
        { name: "Power BI", image: "https://ext.same-assets.com/1001059003/213042655.webp"},
        { name: "Tableau", image: "https://ext.same-assets.com/1001059003/33653260.webp"},
        { name: "Lucidchart", image: "https://ext.same-assets.com/1001059003/2461599443.webp" },
        { name: "MS Excel", image: "https://ext.same-assets.com/1001059003/4140926840.webp"},
      ],
    },
    {
      name: "Mobile Apps",
      technologies: [
        { name: "React Native", image: "https://ext.same-assets.com/1001059003/451914131.webp"},
        { name: "Android", image: "https://ext.same-assets.com/1001059003/3617240690.webp"},
        { name: "iOS", image: "https://ext.same-assets.com/1001059003/568101440.webp"},
      ],
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
                {category.technologies.map((tech, techIndex) => (
                  <a
                    key={techIndex}
                    href={tech.link}
                    className="flex flex-col items-center justify-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-xs text-imenso-gray text-center group-hover:text-imenso-red transition-colors">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
