import React from 'react'

type quote = {
  text: string,
  author: string
}

const Quote = (msg: quote) => {
  return (
    <div className='bg-slate-200 rounded-md px-2 mb-2 border-l-4 border-orange-400'>
      <h2 className='text-orange-600 font-semibold mb-1 pt-1'>{ msg.author }</h2>
      <div className='pb-2'>{ msg.text }</div>
    </div>
  )
}

export default Quote