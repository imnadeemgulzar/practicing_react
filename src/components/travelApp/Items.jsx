const Items = ({itemList,setItemList}) => {
  const handleChange = (id) => {
    setItemList(prev =>
      prev.map((item) =>
        item.id === id ? {...item, isPacked : !item.isPacked} : item
      )
    )
  }
  return (
    <div className='h-[28.5rem] bg-gray-400'>
      <ul className='flex flex-wrap justify-start gap-4 px-5 mx-auto w-[80%] py-4'>
        {itemList.map((item) => {
          return <li key={item.id} className='bg-gray-300 flex justify-between items-center px-4 py-2'>
          <input type="checkbox" className='mr-2' checked={item.isPacked} onChange={() => handleChange(item.id)}/>
          <span>{item.quantity}</span>
          <p className = {`mx-2 ${item.isPacked && 'line-through'}`}>{item.itemName}</p>
          <span>❌</span>
        </li>
        })}
      </ul>
    </div>
  )
}

export default Items
