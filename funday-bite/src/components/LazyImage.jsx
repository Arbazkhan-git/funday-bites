import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className }) {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "150px", // load a bit before visible
      }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : "null"}
      alt={alt}
      onLoad={(e) => (e.target.style.opacity = 1)}
      className={className}
    />
  );
}
