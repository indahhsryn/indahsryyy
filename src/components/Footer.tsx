import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center py-4 w-100"
      style={{
        background: "linear-gradient(to right, #ffffff 0%, #e6f0fa 60%, #add8e6 100%)",
        color: "#333",
        fontWeight: "500",
        borderTop: "1px solid #ccc",
      }}
    >
      <p className="mb-0">Indah Suryaningsih Developer - {currentYear}</p>
    </footer>
  );
}
