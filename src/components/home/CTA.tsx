import React from "react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-imenso">
        <div className="text-center mb-8">
          <span className="text-sm uppercase text-imenso-gray font-medium tracking-wider block">How we can help?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-imenso-blue mt-2">
            I would like to..
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="border border-imenso-blue rounded-full px-6 py-2 text-imenso-blue hover:bg-imenso-blue hover:text-white transition-colors"
          >
            ..discuss a project
          </Link>
          <Link
            href="/contact"
            className="border border-imenso-blue rounded-full px-6 py-2 text-imenso-blue hover:bg-imenso-blue hover:text-white transition-colors"
          >
            ..hire a dedicated resource
          </Link>
          <Link
            href="/career"
            className="border border-imenso-blue rounded-full px-6 py-2 text-imenso-blue hover:bg-imenso-blue hover:text-white transition-colors"
          >
            ..apply for a job
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
