import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Documents({}: Props) {
  return (
    <section>
      <div className='flex flex-col md:flex-row items-center justify-evenly gap-5 w-full md:h-[500px] bg-[#F7F7F7] py-8'>
        <Link href='/artigo-osriscosdaindustria40.jpg' className='flex flex-col items-center justify-between gap-4 hover:shadow-lg p-4'>
          <Image src='/journal-noticiasdodia.png' alt='Artigo escrito no jornal Notícias do Dia' width='300' height='300' />
          <legend className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold'>Os riscos da indústria 4.0</h2>
            <p className='text-sm'>Article written to newspaper Notícias do Dia</p>
          </legend>
        </Link>

        <Link href='https://www.youtube.com/watch?v=fcIlWzzfmU8&pp' target='blank' className='flex flex-col items-center justify-between gap-4 hover:shadow-lg p-4'>
          <Image src='/journal-visaoprofissional.png' alt='Interview to radio show Professional View' width='300' height='300' />
          <legend className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold'>Professional View show</h2>
            <p className='text-sm'>Interview about data privacy law in Brazil</p>
          </legend>
        </Link>

        <a href='/curriculum.portugues.pdf' download className='flex flex-col items-center justify-between gap-4 hover:shadow-lg p-4'>
          <Image src='/journal-curriculumvitae.png' alt='My curriculum vitae' width='230' height='280' />
          <legend className='flex flex-col items-center justify-center'>
            <h2 className='font-semibold'>Download my curriculum vitae</h2>
            Click to download my CV
          </legend>
        </a>
      </div>
    </section>
  )
}