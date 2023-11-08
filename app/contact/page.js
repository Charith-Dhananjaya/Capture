import React from 'react'
import Contact from '@/Components/Contact'
import Hero from '@/Components/Hero'

const contact = () => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
    </div>
  )
}

export default contact