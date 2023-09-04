'use client'
import React, { Component } from 'react';
import Typewriter from 'react-ts-typewriter';
import Social from './Social';

type Props = {}

type State = {}

export class Hero extends Component<Props, State> {
  state = {}
  what = ['RODRIGO SAKAE', 'FULLSTACK', 'DEVELOPER', 'DPO']

  render() {
    return (
      <section style={{ background: "url('/meinaballpool.jpg') fixed repeat center right/cover", width: "100%" }}>
        <div className='h-40 md:h-0'></div>
        <div className='flex flex-col gap-y-2 h-screen hero justify-center'>
          <h1 className='text-4xl font-extrabold ml-8 md:ml-20 tracking-wider bg-white bg-opacity-40 w-fit md:bg-transparent py-1 px-2'>I&apos;M <Typewriter text={ this.what } loop={ true } delay={ 3000 } speed= { 50 } /></h1>
          <h3 className='text-sm ml-8 md:ml-20 tracking-[3px] font-semibold md:font-medium w-fit bg-white bg-opacity-40 md:bg-transparent py-1 px-2'>Fullstack Developer</h3>
          <div className='ml-8 md:ml-20 '>
            <Social />
          </div>
        </div>
      </section>
    )
  }
}