import "./homePage.scss";

import { useLoaderData } from "react-router-dom";
import { CountUp } from "use-count-up";

import SearchBar from "@/components/searchBar/SearchBar";

function HomePage() {
  const { count } = useLoaderData();

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Unlock Your Dream Home with Us.</h1>
          <p>
            Discover the finest properties tailored to your needs, brought to
            you by Team 1 VCL from the European University of Tirana.
            <br /> Our commitment to excellence ensures that your journey to
            finding the perfect home is smooth and enjoyable. Trust us to unlock
            the door to your future.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>
                <CountUp isCounting end={12} duration={3.2} />+
              </h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>
                <CountUp isCounting end={count} duration={3.2} />
              </h1>
              <h2>Property Ready</h2>
            </div>
            <div className="box">
              <h1>
                <CountUp isCounting end={6} duration={3.2} />
              </h1>
              <h2>Programmers</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
