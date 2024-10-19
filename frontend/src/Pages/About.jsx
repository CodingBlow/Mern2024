import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

function About() {
  const [name, setName] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.username) {
      setName(user.username);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full my-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h2>
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          Hi {name ? name : "Guest"}!
        </h1>

        <p className="text-gray-700 text-lg mb-4">
          We are a dedicated team of professionals committed to providing
          exceptional services and solutions to our clients. Our journey began
          with a passion for innovation and a desire to make a difference in the
          industry.
        </p>
        <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700 text-lg mb-4">
          Our mission is to empower businesses by delivering tailored solutions
          that drive success and foster growth. We believe in leveraging
          technology and creativity to overcome challenges and achieve
          remarkable results.
        </p>
        <h3 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-blue-600">John Doe</h4>
            <p className="text-gray-700">CEO</p>
            <p className="mt-2">
              John has over 20 years of experience in the industry and leads our
              team with a vision for success.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-blue-600">Jane Smith</h4>
            <p className="text-gray-700">CTO</p>
            <p className="mt-2">
              With a background in software engineering, Jane drives our
              technical innovation and strategy.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-blue-600">Emily Johnson</h4>
            <p className="text-gray-700">CFO</p>
            <p className="mt-2">
              Emily oversees our financial operations and ensures the fiscal
              health of the organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
