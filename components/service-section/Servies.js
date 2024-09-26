import React from 'react';

const Services = () => {
  return (
    <section className="w-full h-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left Column (Sticky) */}
        <div className="md:w-1/3 w-full md:sticky top-0 self-start mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Web Development Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of web development services tailored to meet your business needs.
            From creating responsive front-end interfaces to building scalable back-end systems,
            we ensure your website runs smoothly and efficiently.
          </p>
        </div>

        {/* Right Column (Scrollable) */}
        <div className="md:w-2/3 w-full overflow-auto">
          {/* Service 1 */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-2">Front-end Development</h3>
            <p className="text-gray-600">
              Creating visually appealing, responsive, and user-friendly interfaces using modern technologies like
              React, Vue, and Tailwind CSS.
            </p>
          </div>

          {/* Service 2 */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-2">Back-end Development</h3>
            <p className="text-gray-600">
              Developing robust and scalable back-end systems using technologies such as Node.js, Express, and MongoDB,
              ensuring your web application functions smoothly behind the scenes.
            </p>
          </div>

          {/* Service 3 */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-2">Full-stack Development</h3>
            <p className="text-gray-600">
              Expertise in both front-end and back-end technologies, delivering fully integrated solutions that handle
              both the client and server-side of your application.
            </p>
          </div>

          {/* Service 4 */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-2">E-commerce Development</h3>
            <p className="text-gray-600">
              Building scalable and secure e-commerce platforms using technologies like Shopify, WooCommerce, and custom
              solutions tailored to your business.
            </p>
          </div>

          {/* Service 5 */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600">
              Seamlessly integrating third-party APIs and creating custom APIs to ensure that your website interacts with
              other services efficiently.
            </p>
          </div>

          {/* Add more services here */}
        </div>
      </div>
    </section>
  );
};

export default Services;
