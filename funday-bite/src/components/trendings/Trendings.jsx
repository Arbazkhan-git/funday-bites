import React, { useEffect, useRef, useState } from "react";
import "./Trendings.css";

export default function Trendings() {
  const trends = [
    { id: 1, title: "Kullad Pizza", img: "https://funday-bites.vercel.app/_next/image?url=%2Fimages%2Fkulhad.webp&w=128&q=75" },
    { id: 2, title: "Burger", img: "https://funday-bites.vercel.app/_next/image?url=%2Fimages%2Fcrispy_chicken_burger.webp&w=128&q=75" },
    { id: 3, title: "Waffle", img: "https://funday-bites.vercel.app/_next/image?url=%2Fimages%2Fwaffle-c.png&w=128&q=75" },
    { id: 4, title: "Pizza", img: "https://funday-bites.vercel.app/_next/image?url=%2Fimages%2Fkulhad.webp&w=128&q=75" }
  ];

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % trends.length;
      setActiveIndex(nextIndex);
      const scrollPos = (slider.scrollWidth / (trends.length * 2)) * (nextIndex + trends.length);
      slider.scrollTo({ left: scrollPos, behavior: "smooth" });
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex, trends.length, pause]);

  const goToSlide = (d) => {
    const slider = sliderRef.current;
    setActiveIndex(d);
    const scrollPos = (slider.scrollWidth / (trends.length * 2)) * (d + trends.length);
    slider.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  return (
    <div className="trendings">
      <h3>Trendings</h3>
      <div
        className="trendings-list"
        ref={sliderRef}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {[...trends, ...trends].map((item, i) => (
          <div className="trendings-content" key={i}>
            <div className="trend-text">
              <p>Introducing</p>
              <p>{item.title}</p>
              <p>Classic Taste <b>Modern Flavor</b></p>
            </div>
            <div className="trend-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="dots">
              {trends.map((_, d) => (
                <span
                  key={d}
                  onClick={() => goToSlide(d)}
                  className={activeIndex === d ? "dot active" : "dot"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
