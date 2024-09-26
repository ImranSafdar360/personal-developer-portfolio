import React from 'react'

const Skills = () => {

  const skills = [
    {
      category: 'Core Technologies',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript'
      ]
    },
    {
      category: 'Frameworks and Libraries',
      skills: [
        'React',
        'Next.js',
        'Redux',
        'MUI (Material-UI)'
      ]
    },
    {
      category: 'Styling and Design',
      skills: [
        'Tailwind CSS',
        'Bootstrap',
        'Responsive Design'
      ]
    },
    {
      category: 'Version Control',
      skills: [
        'Git',
        'Github'
      ]
    },
    {
      category: 'Animation',
      skills: [
        'GSAP',
        'ScrollTrigger',
        'Lenis',
        'Locomotive'
      ]
    },
    {
      category: 'APIs',
      skills: [
        'API Integration',
        'RESTful API'
      ]
    }
  ];

  return (
    <div className='h-full w-full'>
      <div className="p-8">
        {skills.map((categoryItem) => (
          <div key={categoryItem.category} className="mb-20">
            <h2 className="text-4xl font-subSyne text-center mb-8">{categoryItem.category}</h2>
            <div className="flex justify-center gap-4 ">
              {categoryItem.skills.map((skill) =>
                 (
                <div
                  key={skill}
                  className="flex items-center text-xl border-2 border-opacity-40 border-zinc-700 justify-center size-[250px] rounded-lg p-6"
                >
                  <span className="text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills;