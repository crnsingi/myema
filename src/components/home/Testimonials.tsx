import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The entire organization exceeded my expectations. It was a lengthy project, but the team at Ema displayed its high-level expertise throughout the development journey.",
      author: "Eurico Catumbela",
      company: "EJC Technology",
      avatar: "https://media.licdn.com/dms/image/v2/C4D03AQGsjYYJK8Zmaw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1653032026494?e=1755734400&v=beta&t=61zs4CpM5UizAxZc_sKNR0GEbPi3sg4p-wDpnxgo85g",
    },
    {
      quote: "Ema Software performed a difficult TypeScript enhancement for me. They developed a new multi-site design with changes being pushed simultaneously across multiple marketplaces.",
      author: "Marcelo Dauane",
      company: "Software Company",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFez8AWPTq5hA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724504632170?e=1755734400&v=beta&t=clBFh1a-y-iHuQ5-aLPuwF1w3puK65VOAPTzF0HzW7I",
    },
    {
      quote: "We have worked with Ema Software for more than a year and their team has become a trusted technology partner for us. Their team is highly skilled and attentive to our needs.",
      author: "Stelvio Tahiru",
      company: "Healthcare Solutions",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQG03X1HtFh_Nw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634930446446?e=1755734400&v=beta&t=1lPtarerC2XskY7kdRQyzGRM0gYGPyjlBvWpXlfDe7E",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-imenso">
        <div className="text-center mb-16">
          <span className="text-sm uppercase text-imenso-gray font-medium tracking-wider block mb-2">Words of Appreciation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-imenso-blue">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-imenso-lightGray rounded-lg p-8 shadow-sm">
              <div className="mb-6 text-imenso-gray">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <div className="font-semibold text-imenso-blue">{testimonial.author}</div>
                  <div className="text-xs text-imenso-gray">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
