import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The entire organization exceeded my expectations. It was a lengthy project, but the team at Imenso displayed its high-level expertise throughout the development journey.",
      author: "Eurico Catumbela",
      company: "EJC Technology",
      avatar: "https://ext.same-assets.com/1001059003/452312233.webp",
    },
    {
      quote: "Imenso Software performed a difficult WordPress enhancement for me. They developed a new multi-site design with changes being pushed simultaneously across multiple marketplaces.",
      author: "Marcelo Dauane",
      company: "Software Company",
      avatar: "https://ext.same-assets.com/1001059003/452312233.webp",
    },
    {
      quote: "We have worked with Imenso Software for more than a year and their team has become a trusted technology partner for us. Their team is highly skilled and attentive to our needs.",
      author: "Jacob Inaculo",
      company: "Healthcare Solutions",
      avatar: "https://ext.same-assets.com/1001059003/452312233.webp",
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
