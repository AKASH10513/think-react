import React,{useState} from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

const FilterableProductTable = ({products}) => {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)
    function onStockChange(e)
    {
        console.log("your console value is :",e);
        setInStockOnly(e.target.checked)
    }

  return (
    <>
    <SearchBar filterText ={filterText} 
       inStockOnly={inStockOnly}
       setFilterText={setFilterText}
      setInStockOnly={setInStockOnly}
      onStockChange={onStockChange}
      ></SearchBar>
    <ProductTable filterText = {filterText} inStockOnly = {inStockOnly} products = {products}></ProductTable>
    </>
  )
}

export default FilterableProductTable