import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-[#266ca9] border-b-2 border-[#266ca9]' : 'text-[#adb7be]';

  return (
    <button 
      onClick={selectTab} 
      className={`mr-6 ${buttonClasses} font-semibold hover:text-[#266ca9]`}
    >
      {children}
    </button>
  );
}

export default TabButton;
