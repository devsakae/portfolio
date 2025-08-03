'use client'
import Image from 'next/image'
import React, { Component } from 'react'

type Props = {}
type State = {}

class About extends Component<Props, State> {
  state = {}

  render() {
    return (
      <section className='min-h-[88vh] flex flex-col lg:flex-row justify-between items-center w-full bg-slate-100'>
        <div className='mx-8 min-w-[350px]'>
          <div className='div-img'>
          {/* 
            <div className='about-img'> */}
              <Image src='/devsakae.png' alt='This is me' width={ 500 } height={ 500 } />
            {/* </div>
           */}
           </div>
        </div>
        <div className='mx-8'>
          <div className='flex flex-col gap-4 tracking-wide md:text-normal mb-4'>
            <h1 className='font-bold text-xl'>Hello again, world.</h1>
            <p className='indent-6'>
              My first contact with programming was creating apps with <a href="https://pt.wikipedia.org/wiki/QBasic" target="blank">Qbasic</a> on my father&apos;s Pentium 486. Growing up like any other teenager, I dived into sports and computers, so I started writing and designing <a href="http://www.mirc.com" target='blank'>mIRC scripts</a> with sports theme.
            </p>
            <p className='indent-6'>
              After that, I was asked to add some PHP scripts to my friend&apos;s website, which I managed to did by myself, in early 2000&apos;s. Then, I remember using <a href="https://www.joomla.org/" target="blank">Joomla</a>, <a href="https://simplemachines.org/" target="blank">SMF</a> and <a href="https://wordpress.org/" target="blank">Wordpress</a>, which was useful tools that I would just develop/tweak themes and plugins for online communities, becoming not only the developer, but also the admin...
            </p>
            <p className='indent-6'>
              That&apos;s all I remember before a drunk driver hit my car. After several hours in the hospital, couple surgeries and a few stiches, I lost a lot of memories, including how to code. That triggered me to become an attorney.
            </p>
            <p className='indent-6'>
              A few years later, I realize that programming was something I really wanted to do. So I decided to join <a href="https://www.betrybe.com/" target="blank">Trybe bootcamp</a> and focus my studies on learning and understanding Javascript and Typescript, getting passionated by coding in every way and day.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About