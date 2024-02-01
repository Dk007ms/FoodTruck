import React, { useState } from "react";
import Card from "./components/Card"; // Assuming you have a Card component
import logo from "./assets/logo.png";
import section1image from "./assets/section1main.jpeg";
import landingimage from "./assets/landingimage.jpeg";
import GrilledTomatoes from "./assets/GrilledTomatoes.jpeg";
import TravelSnacks from "./assets/TravelSnacks.jpeg";
import GrillCorn from "./assets/GrillCorn.jpeg";
import CrunchWrap from "./assets/CrunchWrap.jpeg";
import PostWorkout from "./assets/PostWorkout.jpeg";
import BrocolliSoup from "./assets/BrocolliSoup.jpeg";
import vector from "./assets/vector.png";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 3;

  const articleData = [
    {
      id: 1,
      imageUrl: GrilledTomatoes,
      heading: "Grilled Tomatoes",
      info: "Explore the art of grilling with our guide to making delicious grilled tomatoes. Learn tips and techniques for achieving the perfect flavor and texture right at home.",
    },
    {
      id: 2,
      imageUrl: TravelSnacks,
      heading: "Travel Snacks",
      info: "Discover convenient and tasty snacks for your travels. Our curated list ensures you stay satisfied on the go with a variety of portable and delicious snack options.",
    },
    {
      id: 3,
      imageUrl: PostWorkout,
      heading: "Post-workout Recipes",
      info: "Fuel your body after workouts with nutritious recipes. From protein-packed meals to refreshing smoothies, our post-workout collection supports your fitness journey.",
    },
    {
      id: 4,
      imageUrl: GrillCorn,
      heading: "Grill Corn",
      info: "Learn the art of grilling corn with our step-by-step guide. Master the techniques for achieving a perfect char and smoky flavor for a delightful corn-on-the-cob experience.",
    },
    {
      id: 5,
      imageUrl: CrunchWrap,
      heading: "Homemade Crunchwrap",
      info: "Indulge in a homemade Crunchwrap Supreme with our easy recipe. Experience layers of flavors and textures with seasoned beef, cheese, lettuce, and more.",
    },
    {
      id: 6,
      imageUrl: BrocolliSoup,
      heading: "Broccoli Cheese Soup",
      info: "Warm up with a bowl of comforting broccoli cheese soup. Our recipe brings together the goodness of broccoli and creamy cheese for a satisfying and delicious experience.",
    },
    // Add more articles as needed
  ];

  const totalArticles = articleData.length;

  const lastPage = Math.ceil(totalArticles / articlesPerPage);

  const visibleArticles = articleData.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage % lastPage) + 1);
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => ((prevPage - 2 + lastPage) % lastPage) + 1);
  };

  return (
    <div className="wrapper relative h-[2700px] w-screen wide:h-[2450px]">
      <header className="relative w-full h-screen mb-24 mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 xl:px-32">
        <img
          className="logo w-24 h-20 md:w-32 md:h-24 absolute top-1"
          src={logo}
          alt="Logo"
        />
        <div className="w-full md:w-96 mt-8 md:mt-16 md:ml-6">
          <h1 className="text-[#0E2368] font-source-sans-pro text-4xl md:text-5xl lg:text-6xl font-bold leading-10 md:leading-12 tracking-wide text-left">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <p className="text-[#444957] mt-4 md:mt-6">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="explorenowbtn bg-[#E23744] text-white py-2 px-4 rounded-full mt-4 hover:bg-[#BF1E38] transition duration-300 ease-in-out">
            Explore Now!
          </button>
        </div>
        <div className="mainimage absolute top-0 right-0 w-full md:w-1/2">
          <img
            className="landing w-[752px] h-[839px] absolute top-0 z-10 object-cover"
            src={vector}
            alt="Vector Image"
          />
          <img
            className="landingimage absolute h-[804px] w-[735px] object-cover z-100  rounded-bl-[198.9px] "
            src={landingimage}
          />
        </div>
        <button className="getInTouchBtn w-36  h-12 border-white border-2 absolute z-10 top-8 right-12 bg-transparent text-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-[#0E2368] transition duration-300 ease-in-out">
          Get in Touch
        </button>
      </header>
      {/* About Us Section */}
      <section className="relative w-full h-auto top-44 bg-gradient-to-r from-[rgba(30,42,93,0.04)] via-[rgba(48,62,130,0.04)] to-[rgba(60,80,157,0.04)] flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row  justify-around">
          <img
            className="w-full md:w-[384px] h-[468px] object-cover rounded-md"
            src={section1image}
            alt="Section 1 Image"
          />
          <div className="w-[447px] h-[254px] flex flex-col gap-[21px] p-8 relative top-8">
            <h2 className="text-[#0E2368] text-3xl md:text-4xl lg:text-5xl font-bold leading-10 md:leading-12 mb-4">
              About Us
            </h2>
            <p className="text-[#444957] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-red-600 w-32 h-12 p-[14px,34px,14px,34px]  gap-7  text-white py-2 px-4 rounded-full mt-4 hover:bg-[#BF1E38] transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* Latest Articles Section */}
      <section className="relative w-full h-auto top-72 flex flex-col items-center justify-center">
        <div className="container mx-auto mb-12">
          <h2 className="text-[#0E2368] text-5xl font-sans font-semibold leading-10 tracking-wide text-left">
            Latest Articles
          </h2>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-around gap-6 md:gap-8 lg:gap-12 relative">
          {visibleArticles.map((article, index) => (
            <Card
              key={article.id}
              imageUrl={article.imageUrl}
              heading={article.heading}
              info={article.info}
            />
          ))}
          <div className="slider-controls absolute top-[39rem] transform -translate-y-1/2 flex items-center space-x-4">
            <button
              className="text-white text-xl bg-gray-700 p-2 rounded-full"
              onClick={prevSlide}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <span className="text-gray-700 text-lg">{`${currentPage}/${lastPage}`}</span>
            <button
              className="text-white text-xl bg-gray-700 p-2 rounded-full"
              onClick={nextSlide}
              disabled={currentPage === lastPage}
            >
              {">"}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
