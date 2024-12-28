import React from "react";
import bgImage from "../../assets/bg.svg";
import devicesImage from "../../assets/devices.svg";
import appStoreImage from "../../assets/App Store.svg";
import playStoreImage from "../../assets/Play Store.svg";
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
        {/* Nav */}
        <div className="container w-full p-6 mx-auto">
          <div className="flex items-center justify-between w-full">
            <a
              className="flex items-center text-2xl font-bold text-indigo-400 no-underline hover:no-underline lg:text-4xl"
              href="#"
            >
              <svg
                className="h-8 pr-2 text-indigo-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z" />
              </svg>
              APP
            </a>

            <div className="flex content-center justify-end w-1/2">
              <a
                className="inline-block h-10 p-2 text-center text-blue-300 no-underline hover:text-indigo-800 hover:text-underline md:h-auto md:p-4"
                href="https://twitter.com/intent/tweet?url=#"
              >
                <svg
                  className="h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                </svg>
              </a>
              <a
                className="inline-block h-10 p-2 text-center text-blue-300 no-underline hover:text-indigo-800 hover:text-underline md:h-auto md:p-4"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
              >
                <svg
                  className="h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="container flex flex-col flex-wrap items-center px-6 pt-24 mx-auto md:pt-48 md:flex-row">
          {/* Left Col */}
          <div className="flex flex-col justify-center w-full overflow-y-hidden xl:w-2/5 lg:items-start">
            <h1 className="my-4 text-3xl font-bold leading-tight text-center text-purple-800 md:text-5xl md:text-left slide-in-bottom-h1">
              Main Hero Message to sell your app
            </h1>
            <p className="mb-8 text-base leading-normal text-center md:text-2xl md:text-left slide-in-bottom-subtitle">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>

            <p className="pb-8 font-bold text-center text-blue-400 lg:pb-6 md:text-left fade-in">
              Download our app:
            </p>
            <div className="flex justify-center w-full pb-24 md:justify-start lg:pb-0 fade-in">
              <img
                src={appStoreImage}
                alt="Download on the App Store"
                className="h-12 pr-4 bounce-top-icons"
              />
              <img
                src={playStoreImage}
                alt="Get it on Google Play"
                className="h-12 bounce-top-icons"
              />
            </div>
          </div>

          {/* Right Col */}
          <div className="w-full py-6 overflow-y-hidden xl:w-3/5">
            <img
              className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
              src={devicesImage}
              alt="Devices"
            />
          </div>

          {/* Footer */}
          <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a
              className="text-gray-500 no-underline hover:no-underline"
              href="#"
            >
              &copy; App {currentYear}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPages;
