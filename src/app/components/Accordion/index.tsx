import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border rounded-md mb-2 ${className}`}>
      <div
        className="p-3 cursor-pointer flex"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
        <span className={`ml-auto ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform transform`}>▼</span>
      </div>
      {isOpen && (
        <div className="p-3 border-t border-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
