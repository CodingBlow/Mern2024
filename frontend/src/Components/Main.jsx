import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Our Success Starts Here. Join Us in Achieving Excellence!";

  useEffect(() => {
    let currentIndex = 0;
    const typeSpeed = 200; // Increased from 100 to 200 for slower typing
    const eraseSpeed = 100; // Separate, faster speed for erasing
    const pauseBeforeErase = 3000; // 3 seconds pause before erasing
    const pauseBeforeRestart = 1000; // 1 second pause before restarting

    const type = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(type, typeSpeed);
      } else {
        setTimeout(deleteText, pauseBeforeErase); // Wait before starting to erase
      }
    };

    const deleteText = () => {
      if (currentIndex > 0) {
        setDisplayedText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
        setTimeout(deleteText, eraseSpeed);
      } else {
        setTimeout(type, pauseBeforeRestart); // Wait before restarting
      }
    };

    type();

    return () => {
      setDisplayedText("");
    };
  }, [fullText]);

  return (
    <div className="relative">
      {/* Banner Section */}
      <div
        className="h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">{displayedText}</h1>
            <p className="text-xl mb-8">
              We are dedicated to delivering the best services for our valued
              customers.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/about">
                <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  About Us
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg mb-8">
          Explore the range of services we offer to help you achieve your goals.
        </p>
        <Link to="/service">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            View Services
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
