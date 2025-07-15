import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FilterBar = () => {
  return (
   <div className="bg-black text-white px-8 py-4 border-t border-b border-gray-800 flex flex-wrap items-center justify-between text-sm">
      {/* Chap tomonda: Filterlar */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="px-3 py-1 rounded text-white flex items-center h-8 select-none cursor-default">
          Filter by
        </span>
        <FilterItem label="Collections" />
        <FilterItem label="Fragrance Families" />
        <FilterItem label="Gender" />
        <FilterItem label="Occasions" />
      </div>

     
      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <FilterItem label="Sort by" />
      </div>
    </div>
  );
};

const FilterItem = ({ label }) => (
  <button
    className="flex items-center gap-1 px-3 py-1 rounded text-white bg-transparent
               hover:text-orange-400 transition duration-200
               outline-none focus:outline-none focus:ring-0"
    type="button"
  >
    {label}
    <FaChevronDown className="text-xs" />
  </button>
);

export default FilterBar;
