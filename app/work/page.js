import React from 'react'
import Portfolio from '@/Components/Portfolio'
import Hero from '@/Components/Hero'


const work = () => {
  return (
    <div>
       <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
        <Portfolio />
    </div>
  )
}

export default work