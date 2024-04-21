import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year: 2022,
        title: "Head English Teacher",
        duration: "2 years",
        details: "I taught English to a variety of students from kindergarten age to adults."
    },
    {
        year: 2018,
        title: "Assistant Language Teacher (ALT)",
        duration: "4 years",
        details: "I taught English to elementary and junior highschool students."
    }
]
const Work = () => {
  return (
    <div id="work" className='max-w-[1040px] mg-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-[#001b5e]'>Work</h1>
    </div>
  )
}

export default Work