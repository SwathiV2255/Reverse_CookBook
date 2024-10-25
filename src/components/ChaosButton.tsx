import React from 'react';

interface ChaosButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ChaosButton: React.FC<ChaosButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-red-600 hover:to-orange-600 transform transition-all hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};

export default ChaosButton;