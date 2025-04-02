import MainLayout from "@/components/layout/MainLayout";
import React from "react";

export default function SayHello() {
  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-imenso-lightGray">
        <div className="container-imenso">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-imenso-blue mb-6 text-center">
              Say hello to your next tech partner
            </h1>
            <p className="text-imenso-gray text-center mb-12">
              Let's discuss your project and find out what we can do to help you realize your vision.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-imenso-darkGray mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-imenso-red focus:border-imenso-red"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-imenso-darkGray mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-imenso-red focus:border-imenso-red"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-imenso-darkGray mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-imenso-red focus:border-imenso-red"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-imenso-darkGray mb-1">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-imenso-red focus:border-imenso-red"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud and DevOps">Cloud and DevOps</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-imenso-darkGray mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-imenso-red focus:border-imenso-red"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-imenso-red text-white py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
