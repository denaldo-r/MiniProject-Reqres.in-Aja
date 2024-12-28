import React from "react";
import bgImage from "../../assets/bg.svg";
import devicesImage from "../../assets/devices.svg";
import Navbar from "../../components/Navbar";

const LandingPages = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="leading-normal tracking-normal text-gray-900"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <div
        className="h-screen bg-right bg-cover pb-14"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />

        <div className="container flex flex-col flex-wrap items-center px-6 pt-24 mx-auto md:pt-48 md:flex-row">
          <div className="flex flex-col justify-center w-full overflow-y-hidden xl:w-2/5 lg:items-start">
            <h1 className="mb-6 text-4xl font-extrabold text-center text-purple-800 drop-shadow-lg md:text-5xl md:text-left slide-in-bottom-h1">
              Welcome to Reqres.in Aja
            </h1>
            <p className="mb-8 text-base leading-normal text-center drop-shadow-lg md:text-2xl md:text-left slide-in-bottom-subtitle">
              Test yours NOW
            </p>

            <p className="pb-8 font-bold text-center text-blue-400 lg:pb-6 md:text-left fade-in">
              Join Now or Login to get started
            </p>
            <div className="flex justify-center w-full pb-24 md:justify-start lg:pb-0 fade-in">
              <button
                className="px-6 py-2 mx-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
              <button
                className="px-6 py-2 mx-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                onClick={() => (window.location.href = "/register")}
              >
                Register
              </button>
            </div>
          </div>

          <div className="w-full py-6 overflow-y-hidden xl:w-3/5">
            <img
              className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src={devicesImage}
              alt="Devices"
            />
          </div>

          {/* Info Section */}
          <div className="py-16">
            <div className="container px-6 mx-auto text-center">
              <h2 className="mb-8 text-2xl font-bold text-gray-800 md:text-4xl">
                Still don't really get it...
              </h2>
              <div className="my-6 border-t-2 border-gray-200"></div>
              <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="w-full text-center sm:w-1/3">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 text-purple-600 bg-purple-100 rounded-full">
                        🚀
                      </span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-800">
                      Reqres is a <em className="italic">real</em> API
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      Reqres simulates real application scenarios. If you want
                      to test a user authentication system, Reqres will respond
                      to successful login/register requests with a token or
                      return a 403 forbidden response to unsuccessful attempts.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="w-full text-center sm:w-1/3">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-blue-100 rounded-full">
                        ⚡
                      </span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-800">
                      Technical demos and tutorials
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      Demonstrate front-end concepts without setting up an API
                      or server. Just write your HTML, CSS, and JavaScript, and
                      Reqres will respond with expected response codes and
                      outputs.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="w-full text-center sm:w-1/3">
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 text-green-600 bg-green-100 rounded-full">
                        🖥️
                      </span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-800">
                      Rapid prototyping of interfaces
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      Prototype new interfaces with minimal setup. Reqres
                      responds to your AJAX requests like a real API,
                      eliminating the need for backend configurations during
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section */}
          <div className="py-16 text-white bg-gradient-to-b from-blue-600 to-purple-900">
            <div className="container px-6 mx-auto text-center md:px-12">
              <h2 className="mb-12 text-2xl font-bold md:text-4xl">
                Test your front-end against a real API
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="w-full text-center sm:w-1/3">
                  <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-10">
                    <h3 className="mb-4 text-xl font-bold">Fake data</h3>
                    <p className="text-sm md:text-base">
                      No more tedious sample data creation, we've got it
                      covered.
                    </p>
                  </div>
                </div>
                <div className="w-full text-center sm:w-1/3">
                  <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-10">
                    <h3 className="mb-4 text-xl font-bold">Real responses</h3>
                    <p className="text-sm md:text-base">
                      Develop with real response codes. GET, POST, PUT & DELETE
                      supported.
                    </p>
                  </div>
                </div>
                <div className="w-full text-center sm:w-1/3">
                  <div className="p-6 bg-white rounded-lg shadow-lg bg-opacity-10">
                    <h3 className="mb-4 text-xl font-bold">Always-on</h3>
                    <p className="text-sm md:text-base">
                      24/7 free access in your development phases. Go nuts.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-12 text-lg">
                A hosted REST-API ready to respond to your AJAX requests.
              </p>
              <button
                className="px-6 py-2 mt-6 text-blue-700 bg-white rounded-md shadow-md hover:bg-gray-200"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="#"
            >
              &copy; Reqres.in Aja X Denaldo {currentYear}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPages;
