const Footer = ({itemList}) => {
  const packedItems = itemList.filter(item =>
    item.isPacked
  )
  return (
    <div className='bg-[#ccc] text-center p-4 border-t-2 border-blue-600'>
      <h1 className='font-bold text-xl text-blue-600'> 😍 You have picked {itemList.length} items and packed 🎁 {packedItems.length} items</h1>
    </div>
  )
}

export default Footer
