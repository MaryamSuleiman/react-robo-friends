
function SearchBox({updateSearch}) {
  return (
    <div>
        <input
        onChange={updateSearch}
        type='text' 
        placeholder='Search...'  
        className='search-box'
      />
    </div>
  )
}

export default SearchBox