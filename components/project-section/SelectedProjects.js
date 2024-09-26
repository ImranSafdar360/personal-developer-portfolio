// import Image from 'next/image';

// const projects = [
//   {
//     id: 1,
//     title: 'Sitdown-website',
//     year: '2023',
//     description: 'A modern bicycle for the urban commuter.',
//     imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 2,
//     title: 'E-axon Website',
//     year: '2023',
//     description: 'A pair of custom sneakers for sports enthusiasts.',
//     imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 3,
//     title: 'E-Commerce',
//     year: '2024',
//     description: 'User experience design for mobile and web apps.',
//     imageUrl: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 4,
//     title: 'Modern Designer Portfolio',
//     year: '2024',
//     description: 'Lifestyle and fashion photography featuring Vans.',
//     imageUrl: 'https://images.unsplash.com/photo-1594283025372-dfd7190b3bed?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ];

// export default function SelectedWork() {
//   return (
//     <section className="w-full h-full">
//      <div className="w-full flex flex-wrap justify-center items-center gap-8">
//         {projects.map((card, index) => (
//            <div key={index} className={`relative w-[60%] 
//             ${index === 1 && '!w-[40%]'} 
//             ${index === 2 && '!w-[40%]'}
//             ${index === 3 && '!w-[60%]'}
//            h-full min-h-[450px]`}>
//            <div className={`w-[100%] h-[500px] ${index === 2 && '!h-[600px]'} bg-slate-500 rounded-[24px]`}>
//            </div>
//            <div className='w-full h-full absolute top-0 left-0'>
//              <div className='w-full flex justify-between items-center'>
//                <h1 className='text-[18px] font-roboto font-bold text-whole-text'>Project Name</h1>
//                <p>View Project →</p>
//              </div>
//              <div className='w-full flex justify-start items-center gap-[10px]'>
//                <p>UI Design</p>
//                •
//                <p>UX</p>
//                •
//                <p>Wireframe</p>
//                <p></p>
//              </div>
//            </div>
//          </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Sitdown-website',
    year: '2023',
    description: 'A modern bicycle for the urban commuter.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'E-axon Website',
    year: '2023',
    description: 'A pair of custom sneakers for sports enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'E-Commerce',
    year: '2024',
    description: 'User experience design for mobile and web apps.',
    imageUrl: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Modern Designer Portfolio',
    year: '2024',
    description: 'Lifestyle and fashion photography featuring Vans.',
    imageUrl: 'https://images.unsplash.com/photo-1594283025372-dfd7190b3bed?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Modern Developer Portfolio',
    year: '2024',
    description: 'Lifestyle and fashion photography featuring Vans.',
    imageUrl: 'https://images.unsplash.com/photo-1594283025372-dfd7190b3bed?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full h-full">
    <div className="w-full flex flex-wrap justify-center items-center gap-10">
      {projects.map((project, index) => {
        let widthClass = 'w-[48.2%]';
        let heightClass = 'h-[500px]';

        if ( index === 2) {
          widthClass = 'w-[100%]';
        }

        if (index === 2) {
          heightClass = 'h-[600px]'; 
        }

        return (
          <div
            key={project.id}
            className={`relative ${widthClass} ${heightClass} min-h-[450px] bg-gray-800 rounded-2xl overflow-hidden`}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />

            <div className="w-full h-full absolute flex flex-col justify-between p-6 text-white">
              <div className="absolute top-5 right-5 text-lg font-bold w-[80px] h-[35px] rounded-[40px] bg-secondary-bg bg-opacity-[80%] text-black flex justify-center items-center">{project.year}</div>
              <div className='w-full flex justify-between items-center absolute bottom-5 left-0 px-5'>
                <div className={`w-full max-w-[60%] ${index === 2 && '!max-w-[50%]'} h-full py-[20px] px-[30px] bg-secondary-bg bg-opacity-[80%] text-black rounded-[20px] `}>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-1">{project.description}</p>
                </div>
                <div className="w-[56px] h-[56px] bg-secondary-bg bg-opacity-[80%] flex justify-center items-center text-black rounded-full">
                  <span className="text-[24px] font-bold hover:-rotate-45 transition-all cursor-pointer">→</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  );
}
