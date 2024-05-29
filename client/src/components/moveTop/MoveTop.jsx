import "./moveTop.scss";

import { useState, useEffect } from "react";

function MoveTop() {
  const [activeProgress, setActiveProgress] = useState(false);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 550,
    });
  };

  const setScroller = () => {
    const progressPath = document.getElementById("path");

    let pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      let offset = window.pageYOffset;
      let height = document.body.offsetHeight - window.innerHeight;
      let progress = pathLength - (offset * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setActiveProgress(true);
      } else {
        setActiveProgress(false);
      }
    });
  };

  useEffect(() => {
    setScroller();
  }, []);

  return (
    <div
      id="moveTop"
      onClick={moveToTop}
      className={`progress ${activeProgress ? "active" : ""}`}
    >
      <svg
        className="circle"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path id="path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  );
}

export default MoveTop;
