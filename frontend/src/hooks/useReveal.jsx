import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useReveal() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("js");
    const nodes = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname]);
}