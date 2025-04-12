import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-imenso-lightGray py-16 md:py-20 relative overflow-hidden">
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-imenso-blue mb-6">
            Tech Consulting Agency
          </h1>
          <p className="text-lg md:text-xl text-imenso-gray mb-8">
            From startups to big corporates, Ema offers everything that needs to build world-class applications.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
