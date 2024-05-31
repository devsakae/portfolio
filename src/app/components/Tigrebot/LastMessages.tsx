"use client";
import React, { Ref, useEffect, useRef, useState } from 'react'
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

  const myRef = useRef<HTMLDivElement>(null);
 
  const getMessages = async () => {
    setLoading(true);
    await fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getMessages();
  }, [])

  useEffect(() => {
    const thisRef = myRef.current;
    thisRef?.scrollIntoView()
  }, [messages])

  return (
    <div className='flex flex-col'>
      <main className='flex items-center w-full justify-center'>
        { loading
          ? (<Loading />)
          : (<div className='flex flex-col items-center'>
              { messages?.map((m: mongoMessages) => (<SingleMessage msg={ m } key={ m._id } />)) }
              <article className='flex items-start w-full gap-1 pr-1 md:w-2/3 md:justify-center'>
                <div className='min-w-[45px] px-1'>
                  <Image src={"/tigrebot.png"} alt='Tigrebot' width={42} height={42} className='rounded-full' />
                </div>
                <div
                  className="rounded-lg rounded-tl-none mb-4 px-2 text-sm w-full bg-white flex flex-col"
                  ref={myRef}
                >
                    <h2 className='text-blue-500 font-semibold mt-1 mb-2'>Tigrebot</h2>
                    <span>Gostou? No nosso grupo TigreLOG no WhatsApp, tem quiz, bolão, piadinha...<br /><br />Acesse já <a href={ inviteLink }>clicando aqui nesse convite especial</a>! 🐯</span>
                    <p className="text-gray-600 text-xs mt-1 mb-2 text-right leading-none">AGORA Ẽ A HORA</p>
                </div>
              </article>
             </div>) }
      </main>
      {/* <footer className='flex items-center justify-center w-full bg-slate-400 bottom-0 fixed h-8 text-sm'>
        <p>Criado e desenvolvido por Rodrigo Sakae em 2023</p>
      </footer> */}
    </div>
  )
}

export default LastMessages