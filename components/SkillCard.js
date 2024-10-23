import React from 'react'
import SpotlightCard from './shared-components/SpotlightCard'

const SkillCard = ({ skillTitle, skillLogo }) => {
  return (
    <SpotlightCard className='custom-spotlight-card'>
    <div className="flex flex-col items-center text-xl justify-between h-[250px] w-[350px] rounded-lg py-8">
      {skillLogo}
      <span className="text-center font-subSyne text-2xl">{skillTitle}</span>
    </div>
    </SpotlightCard>
  )
}

export default SkillCard
