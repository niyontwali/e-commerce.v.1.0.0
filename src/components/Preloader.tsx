"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);

    window.addEventListener("beforeunload", handleRouteChange);
    window.addEventListener("load", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
      window.removeEventListener("load", handleRouteChangeComplete);
    };
  }, [pathname]);

  return isLoading ? (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default Preloader;
