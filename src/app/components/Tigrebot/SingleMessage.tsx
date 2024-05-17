import Image from 'next/image'
import React from 'react'

const SingleMessage = ({ msg }: any) => {
  const data = new Date(msg.data);
  return (
    <article className='ml-8 mb-2 flex gap-2 items-start justify-start'>
      <div className='min-w-10'>
        <Image src={"/tigrebot.png"} alt='Tigrebot' width={70} height={70} className='rounded-full' />
      </div>
      <div className="max-w-5xl rounded-lg rounded-tl-none my-1 mb-4 px-3 py-2 text-sm bg-white flex flex-col">
          <h2 className='text-blue-500 font-semibold mb-2'>Tigrebot</h2>
          { JSON.parse(msg.mensagem).split(/\n/).map((l: string) => (<>{l}<br /></>)) }
          <p className="text-gray-600 text-xs mt-1 text-right leading-none">{ data.toLocaleString('pt-br') }</p>
      </div>
    </article>
  )
}

export default SingleMessage