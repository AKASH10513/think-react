import React from 'react';

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  setInStockOnly,onStockChange
}) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onStockChange(e)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
