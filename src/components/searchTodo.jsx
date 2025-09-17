
const SearchTodo = ({setSearchTerm,searchTerm}) => {
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
  return (
    <div>
      <input type="text" placeholder='Search Todos' className="bg-gray-200 py-2 px-4 mt-4" onChange={handleChange} value={searchTerm}/>
    </div>
  )
}

export default SearchTodo
