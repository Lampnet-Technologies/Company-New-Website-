"use client";
import { useEffect } from "react";

const BootstrapClient = () => {
  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default BootstrapClient;
