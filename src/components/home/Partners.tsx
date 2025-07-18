import React from "react";
import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      name: "EJC Technology",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGuu-3j2Z85ZA/company-logo_200_200/company-logo_200_200/0/1632396285661/ejctechnology_logo?e=1755734400&v=beta&t=-ozw2lcC0Yi3grAD3yuo_g8RrE0wrAUXjubcI9BkB1M",
    },

    {
      name:"Nawabus",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEelCahbBvmcg/company-logo_200_200/company-logo_200_200/0/1630655190500/nawabus_logo?e=1755734400&v=beta&t=6rPdZnoYIEP4xMl_Vl8U6VHwSeZ7ShRBoi3PVl6RahI"

    },
    {
      name:"Property Assistent",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGOvzgjgXwKkA/company-logo_200_200/company-logo_200_200/0/1668971278108?e=1755734400&v=beta&t=zPTMe9I4MChp9f7GMejROOlafWbVAcr-RZ4xYVdSy6c"

    },
    {
      name:"DeltaCorp",
      logo: "https://media.licdn.com/dms/image/v2/C5616AQEZCM0VhmvYFg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1641416134810?e=1755734400&v=beta&t=Bt82JTDR-IR5Ac5jWEXpPqlI156Gr9zMZuC0oz8xhvA"

    },
  
  ];

  return (
    <section className="py-12 bg-imenso-lightGray border-t border-gray-200">
      <div className="container-imenso">
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-imenso-blue mb-2">
            We have worked with clients across various industries
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-imenso-blue font-bold text-lg">2+</span>
            <span className="text-imenso-gray">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
