import React, { useState } from "react";

export const Select = ({ children, name, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value) => {
    setSelectedValue(value);
    onValueChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="border border-gray-300 rounded px-3 py-2 cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue || "Select an option"}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
          {React.Children.map(children, (child) => {
            if (child.type === SelectItem) {
              return React.cloneElement(child, {
                onClick: () => handleSelect(child.props.value),
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

export const SelectTrigger = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectValue = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

export const SelectContent = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectItem = ({ children, value, onClick }) => {
  return (
    <div
      className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
