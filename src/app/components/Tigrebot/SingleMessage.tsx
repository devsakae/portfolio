import Image from 'next/image'
import React from 'react'
import Quote from './Quote';

const SingleMessage = ({ msg }: any) => {
  const data = new Date(msg.data);
  return (
    <article className='flex items-start w-full gap-1 pr-1 md:w-2/3 md:justify-center'>
      <div className='min-w-[45px] px-1'>
        <Image src={"/tigrebot.png"} alt='Tigrebot' width={42} height={42} className='rounded-full' />
      </div>
      <div className="rounded-lg rounded-tl-none mb-4 px-2 md:px-4 text-sm w-full bg-white flex flex-col">
          <h2 className='text-blue-500 font-semibold mt-1 mb-2'>Tigrebot</h2>
          { msg.quote && <Quote text={ msg.quote.text } author={ msg.quote.author } /> }
          { msg.mensagem.split(/\n/).map((l: string) => (<>{l}<br /></>)) }
          <p className="text-gray-600 text-xs mt-1 mb-2 text-right leading-none">{ data.toLocaleString('pt-br') }</p>
      </div>
    </article>
  )
}

export default SingleMessage