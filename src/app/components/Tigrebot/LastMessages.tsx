"use client";
import React, { useEffect, useState } from 'react'
import SingleMessage from './SingleMessage';
import Loading from '../Loading';
import Image from 'next/image';

export type mongoMessages = {
  _id: string,
  mensagem: string,
  data: Date,
  last?: boolean
}

const inviteLink = "https://chat.whatsapp.com/2yy89JmmjYf6mQLW87wjTQ";

const LastMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  const getMessages = async () => {
    setLoading(true);
    await fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => alert(error.message))
      .finally(() => {
        setLoading(false)
  });
  }

  useEffect(() => {
    getMessages();
  }, [])

  // useEffect(() => {

  // }, [messages])

  return (
    <div className='flex flex-col items-center w-full'>
      <main className='p-2 rounded-2xl mb-4'>
        { loading
          ? (<Loading />)
          : (<>
              { messages?.map((m: mongoMessages) => (<SingleMessage msg={ m } key={ m._id } />)) }
              <article className='ml-8 mb-2 flex gap-2 items-start justify-start'>
              <div className='min-w-10'>
                <Image src={"/tigrebot.png"} alt='Tigrebot' width={70} height={70} className='rounded-full' />
              </div>
              <div className="max-w-5xl rounded-lg rounded-tl-none my-1 mb-4 px-3 py-2 text-sm bg-white flex flex-col">
                  <h2 className='text-blue-500 font-semibold mb-2'>Tigrebot</h2>
                  <p className='mb-2'>Gostou? No nosso grupo TigreLOG no WhatsApp, tem quiz, bolão, piadinha...</p>
                  <p>Acesse já por <a href={ inviteLink }>clicando aqui nesse convite especial</a>! 🐯</p>
                  <p className="text-gray-600 text-xs mt-1 text-right leading-none">AGORA É A HORA</p>
              </div>
            </article>
             </>) }
      </main>
      <footer className='flex items-center justify-center w-full bg-slate-400 bottom-0 fixed h-8 text-sm'>
        <p>Criado e desenvolvido por Rodrigo Sakae em 2023</p>
      </footer>
    </div>
  )
}

export default LastMessages