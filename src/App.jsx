import { useState } from "react";
import logo from "./assets/logo.png";
import section1image from "./assets/section1main.jpeg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper w-screen h-max min-h-screen">
      <header className="landing w-[1440px] h-[804px] relative">
        <img
          className="logo w-[107px] h-[83px] relative top-[33px] left-[100px]"
          src={logo}
        />

        <h1 className="Intro text-[#0E2368] relative w-[345px] h-[207px] top-[227px] left-[100px] font-[700] size-[62px] leading-[69px] font-sans border-1 border-[#0E2368]">
          Discover the <span className="best text-[#E23744]">Best</span> Food
          and Drinks
        </h1>
        <p className="">
          Naturally made Healthcare Products for the better care & support of
          your body.
        </p>
        <button className="bg-[#E23744]"></button>

        <div className="landingimage">
          <img
            className="w-[735px] h-[804px] relative top-[5px] left-[705px] rounded"
            src={section1image}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
