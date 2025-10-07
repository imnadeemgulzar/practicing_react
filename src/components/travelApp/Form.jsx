
const Form = ({handleSubmit,itemName,setItemName,quantity,setQuantity}) => {
  return (
    <div className='bg-[#ccc] text-center py-8'>
      <form className='gap-4 flex justify-center'  onSubmit={handleSubmit}>
        <select className="w-12" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input className='border-none outline-none px-4 py-2 bg-gray-200' type="text" placeholder='Pick your items' value={itemName} onChange={(e) => setItemName(e.target.value)}/>
        <button className='px-4 bg-blue-600 text-gray-200'>Pick</button>
      </form>
    </div>
  )
}

export default Form
