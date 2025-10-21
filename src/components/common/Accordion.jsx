// src/components/common/Accordion.jsx
import React, { useState } from "react";

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-4 bg-white text-gray-700">{children}</div>}
    </div>
  );
};

export default Accordion;
