import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Service() {
  const SERVICE_URI = "https://mern2024-ten.vercel.app/api/service";

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(SERVICE_URI);
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full my-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map((service) => (
              <Link
                to={`/services/${service.route}`}
                key={service._id}
                className="block bg-gray-200 p-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.service}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {service.service}
                </h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                <p className="text-gray-700 font-semibold mb-2">
                  Price: ${service.price}
                </p>
                <p className="text-gray-700 font-semibold">
                  Provider: {service.provider}
                </p>
              </Link>
            ))
          ) : (
            <p>No services available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
