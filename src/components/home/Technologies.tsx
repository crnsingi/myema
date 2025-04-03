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
        { name: "Python", image: "data:image/jpeg;base64,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"},
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
    {
      name: "Database",
      technologies: [
        { name: "MySQL", image: "https://ext.same-assets.com/1001059003/451914131.webp"},
        { name: "PostSQL", image: "https://ext.same-assets.com/1001059003/3617240690.webp"},
        { name: "MongoDB", image: "https://ext.same-assets.com/1001059003/568101440.webp"},
      ],
    },
    {
      name: "Deployment",
      technologies: [
        { name: "AWS", image: "https://ext.same-assets.com/1001059003/451914131.webp"},
        { name: "Azure", image: "https://ext.same-assets.com/1001059003/3617240690.webp"},
        { name: "Google Cloud", image: "https://ext.same-assets.com/1001059003/568101440.webp"},
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
