/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import ProgressLine from '../../public/images/progress-line.svg'
import PlanningSvg from '../../public/images/brain-storming.svg'
import DesignSvg from '../../public/images/sitemape.svg'
import Development from '../../public/images/programmer.svg'
import Maintenance from '../../public/images/card-process.svg'
import Deployment from '../../public/images/api-svg.svg'
import Testing from '../../public/images/maintenance-laptop.svg'


const progressCard = [
  {
    row: [
      {
        step:"Step 1",
        icon:PlanningSvg,
        title:"Discovery and Planning"
      },
      {
        step:"Step 2",
        icon:DesignSvg,
        title:"Design and User Experience"
      },
      {
        step:"Step 3",
        icon:Development,
        title:"Development"
      }
    ]
  },
  {
    row: [
      {
        step:"Step 4",
        icon:Maintenance,
        title:"Maintenance and Updates"
      },
      {
        step:"Step 5",
        icon:Deployment,
        title:"Deployment"
      },
      {
        step:"Step 6",
        icon:Testing,
        title:"Testing"
      }
    ]
  }
]

const Method = () => {
  return (
    <div className='w-full flex justify-center items-center mb-[0px] md:mb-[190px] px-6'>
      <div className='w-full max-w-[990px] flex flex-col justify-between text-center md:items-start'>
        <h3 className='text-20/28 md:text-24/34 font-bold text-white font-poppins mb-[35px] md:mb-[150px]'>How I do it</h3>
        <div>
        <div className='w-[85%] relative self-end hidden md:block'>
     <img src={ProgressLine.src} alt='Line' className='w-full h-full'/>
   <div className='w-full absolute top-[-75px] left-[-50px] flex flex-col justify-between items-center gap-[90px]'>
    {progressCard.map((card, index) =>(
      <div key={index} className='w-full flex justify-between items-center'>
        {card.row.map((item, i) =>(
          <div key={i} className='w-[200px] h-[160px] text-center flex flex-col justify-start items-center gap-[10px] p-3'>
            <p className='text-16/22 font-medium text-light-gray'>{item.step}</p>
            <img className='w-[85px] h-[85px]' src={item.icon.src} alt='Icon'/>
            <h3 className='text-16/22 font-medium md:font-semibold text-white'>{item.title}</h3>
          </div>
        ))}
     </div>
    ))}
   </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Method;
